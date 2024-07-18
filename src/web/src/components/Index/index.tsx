import { ComfyUIPrompt,ComfyUIPromptEditPanel } from '@/utils/api';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { PageHeader } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import { Radio,Space,Tooltip,Typography } from 'antd';
import axios from 'axios';
import React from 'react';
import { Pipeline } from '../Pipeline';

const SIZE = 512;
const DEFAULT_ENDPOINT_HASH = 'c410d179b056797269a4a2188bdf8a48'; // 用来方便在混淆后替换环境变量的值

export default function () {
  const [key, setKey] = React.useState('');

  const { data: prompts } = useRequest(
    async () =>
      (
        await axios.get(
          `https://serverless-tool-images.oss-cn-hangzhou.aliyuncs.com/aigc/json/couple.json`
        )
      )?.data as {
        title: string;
        prompt: ComfyUIPrompt;
        params: ComfyUIPromptEditPanel[];
      }[],
    {}
  );

  const prompt = React.useMemo(() => {
    return (prompts || []).find((item) => item.title === key)?.prompt;
  }, [key, prompts]);

  const params = React.useMemo(() => {
    return (prompts || []).find((item) => item.title === key)?.params;
  }, [key, prompts]);

  React.useEffect(() => {
    setKey(prompts?.[0]?.title || '');
  }, [prompts]);

  return (
    <Space direction='vertical' style={{ padding: 24, width: '100%' }}>
      <PageHeader
        title={
          <a
            href='https://startup.aliyun.com/create/snbm'
            target='_blank'
            style={{ color: 'white' }}
          >
            阿里云X优酷 Create@AI江湖创作大赛
          </a>
        }
        subTitle={
          <Typography.Text>
            <a
              href='https://www.aliyun.com/product/fc'
              target='_blank'
              style={{ color: 'white', textDecoration: 'underline' }}
            >
              阿里云函数计算
            </a>{' '}
            提供计算资源
          </Typography.Text>
        }
      />

      <Space size='large'>
        <Radio.Group
          value={key}
          onChange={(e) => setKey(e?.target?.value)}
          options={(prompts || []).map((item) => item.title)}
          optionType='button'
          buttonStyle='solid'
          style={{ marginLeft: '2em' }}
        />

        <Tooltip
          title={
            <p>
              <ul>
                <li>
                  使用本页面生图将会消耗阿里云函数计算资源，配置为12GB A10 GPU +
                  4核 vCPU + 16GB 内存。生成每张图尺寸约1024px × 784px
                  预计消耗时间约 1分钟，每张图预计消耗费用约为0.21元。
                </li>
                <li>
                  首次新开通函数计算用户即可领取每月15元试用额度，12个月有效，即每月可用本页面免费生图约70张，查看{' '}
                  <Typography.Link
                    target='_blank'
                    href='https://help.aliyun.com/zh/functioncompute/product-overview/billing-overview?spm=5176.137990.J_5253785160.7.36551608z97kE2'
                  >
                    计费概述
                  </Typography.Link>
                </li>
              </ul>
            </p>
          }
        >
          <Typography.Text>
            计费说明 <QuestionCircleOutlined />
          </Typography.Text>
        </Tooltip>
      </Space>

      {prompt ? (
        <Pipeline
          endpoint={DEFAULT_ENDPOINT_HASH}
          prompt={prompt}
          params={params}
        />
      ) : (
        <div style={{ color: 'white', width: '100%', textAlign: 'center' }}>
          请先选择您希望的图片生成方式
        </div>
      )}
    </Space>
  );
}
