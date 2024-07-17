import {
  ComfyUIProgress,
  ComfyUIPrompt,
  ComfyUIPromptEditPanel,
  runPrompt,
} from '@/utils/api';
import {
  Button,
  Card,
  Col,
  Image,
  InputNumber,
  Row,
  Space,
  notification,
} from 'antd';
import React from 'react';
import { Progress, getTotalProgress } from '../Progress';
import { Provider as ImageProvider } from './Image';
import { Panel } from './Panel';

import styles from './style.scss';
export function Pipeline(props: {
  endpoint: string;
  prompt: ComfyUIPrompt;
  params?: ComfyUIPromptEditPanel[];
}) {
  const { endpoint, prompt, params = [] } = props;
  const [loading, setLoading] = React.useState(false);
  const [progresses, setProgresses] = React.useState<ComfyUIProgress[]>([]);
  const [promptValue, setPromptValue] = React.useState(prompt);
  const [results, setResults] = React.useState([] as string[]);
  const [batch, setBatch] = React.useState(4);

  React.useEffect(() => {
    setPromptValue(prompt);
  }, [prompt]);

  // 计算所有的进度，并且返回整体进度
  const { totalPrecent, currentNode, currentPrecent } = React.useMemo(() => {
    const count = progresses.length;
    let totalPrecent = 0;
    let currentNode = '';
    let currentPrecent = 0;

    for (const p of progresses) {
      const {
        precent: pPrecent,
        currentNode: pCurrentNode,
        currentPrecent: pCurrentPrecent,
      } = getTotalProgress(promptValue, p);

      totalPrecent += pPrecent;
      if (!currentNode && pCurrentPrecent > 0) {
        currentNode = pCurrentNode;
        currentPrecent = pCurrentPrecent;
      }
    }

    totalPrecent /= count;

    return { totalPrecent, currentNode, currentPrecent };
  }, [progresses]);

  return (
    <ImageProvider endpoint={endpoint}>
      <div style={{ display: 'flex' }}>
        <div style={{ maxWidth: 400, flex: '1 1 300px' }}>
          <Card>
            <Space direction='vertical' size='large' style={{ width: '100%' }}>
              <Space
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontWeight: 'bold' }}>生成数量</div>

                <InputNumber
                  min={1}
                  max={8}
                  value={batch}
                  onChange={(v) => setBatch(v || 1)}
                />
              </Space>

              <Space
                direction='vertical'
                size='large'
                className={styles.scrollbar}
                style={{
                  width: '100%',
                  overflow: 'auto',
                  maxHeight: 'calc(70vh - 100px)',
                }}
              >
                {params.map((item, idx) => (
                  <div
                    key={[
                      item?.id || '',
                      item?.key || '',
                      item?.title || '',
                      item?.type || '',
                    ].join('#')}
                    style={{
                      display: !!item?.hidden ? 'none' : undefined,
                    }}
                  >
                    <Panel
                      panel={item}
                      values={promptValue}
                      onValuesChange={setPromptValue}
                    />
                  </div>
                ))}
              </Space>

              <Button
                size='large'
                type='primary'
                loading={loading}
                style={{ width: '100%', fontSize: '1.5em', height: '2.5em' }}
                onClick={async () => {
                  try {
                    // 检查参数是否已填入
                    const missing = params.filter(
                      (item) =>
                        item.type !== 'group' &&
                        !promptValue[item?.id || '']?.inputs?.[item?.key || '']
                    );

                    if (missing.length > 0) {
                      notification.error({
                        message: '参数缺失',
                        description: `请填写 ${missing
                          .map((item) => item.title)
                          .join(', ')} 参数`,
                      });
                      return;
                    }

                    console.debug({ prompt });

                    setLoading(true);
                    setProgresses(Array(batch).fill({} as ComfyUIProgress));
                    await Promise.all(
                      Array(batch)
                        .fill(0)
                        .map(async (_, idx) => {
                          const res = await runPrompt(endpoint, prompt, (p) =>
                            setProgresses((ps) => [
                              ...ps.slice(0, idx),
                              p,
                              ...ps.slice(idx + 1),
                            ])
                          );

                          const imgResults = Object.values(res || {})
                            .map((item) => item.results || [])
                            .flat();

                          if (!imgResults?.length) {
                            notification.error({
                              message: '生成结束，但无图片结果',
                              description: `请检查函数日志确认原因，这可能是因为图片损坏或 ComfyUI 报错`,
                            });
                          } else {
                            setResults((r) => [...imgResults, ...r]);
                          }
                        })
                    );
                  } catch (e) {
                    console.error(e);
                    notification.error({
                      message: '生成错误',
                      description: `${e}`,
                    });
                  } finally {
                    setLoading(false);
                  }
                }}
              >
                开始创作
              </Button>
            </Space>
          </Card>
        </div>

        <div style={{ flex: 1, padding: 24, width: '100%' }}>
          <Space direction='vertical' style={{ width: '100%' }}>
            {loading && (
              <Card style={{ width: '100%' }}>
                <Progress
                  precent={totalPrecent}
                  currentNode={currentNode}
                  currentPrecent={currentPrecent}
                  finished={!loading}
                />
              </Card>
            )}

            {!!results && results.length > 0 ? (
              <Image.PreviewGroup>
                <Row
                  gutter={[12, 12]}
                  style={{ maxHeight: 'calc(70vh - 100px)', overflow: 'auto' }}
                  className={styles.scrollbar}
                >
                  {results.map((src) => (
                    <Col key={src} xxl={6} lg={12} sm={24}>
                      <Image src={`data:image/png;base64,${src}`} />
                    </Col>
                  ))}
                </Row>
              </Image.PreviewGroup>
            ) : (
              <p style={{ color: 'white' }}>正在等待您的创作</p>
            )}
          </Space>
        </div>
      </div>
    </ImageProvider>
  );
}
