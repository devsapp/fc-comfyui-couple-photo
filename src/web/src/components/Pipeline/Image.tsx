import { Space, Spin, Typography, Upload, notification } from 'antd';
import { RcFile } from 'antd/es/upload';
import React from 'react';

import { DeleteOutlined, UploadOutlined } from '@ant-design/icons';
export { Provider } from './context';

import { blobToBase64 } from '@/utils/b64';
import styles from './style.scss';

export function ImageUploader(props: {
  title: string;
  description?: string;
  value: string;
  onChange: (value: string) => void;
  images?: string[];
  inPanel?: boolean;
}) {
  const { title, description, value, onChange, images, inPanel } = props;

  const isHttpUpload = images?.[0]?.startsWith('http');

  const [url, setURL] = React.useState('');
  React.useEffect(() => {
    if (value?.startsWith('http')) setURL(value);
    else if (!value) setURL('');
    else setURL(`data:image/png;base64,${value}`);
  }, [value]);

  const [loading, setLoading] = React.useState(false);

  return (
    <Space direction='vertical' className={styles.image_wrapper}>
      <div className={inPanel ? styles['title-inside'] : styles.title}>
        {title}
      </div>
      {description && <div className={styles.description}>{description}</div>}

      <Spin spinning={loading} className='full-width'>
        <Space direction='vertical' style={{ width: '100%' }}>
          <div style={{ height: 200, width: '100%' }}>
            {url ? (
              <div className={styles.image_container}>
                <img src={url} />
                <div
                  className={styles.mask}
                  onClick={() => {
                    onChange('');
                  }}
                >
                  <DeleteOutlined />
                </div>
              </div>
            ) : isHttpUpload ? (
              <div style={{ height: '100%' }}>
                <div
                  className={styles['scrollbar-y']}
                  style={{
                    display: 'flex',
                    height: '100%',
                  }}
                >
                  {(images || []).map((src) => (
                    <div
                      key={src}
                      className={[styles['scroll-item'], styles.clickable].join(
                        ' '
                      )}
                      onClick={() => onChange(src)}
                    >
                      <img src={src} />
                      <Typography.Text ellipsis>
                        {src?.split('/').pop()?.split('.')?.[0]}
                      </Typography.Text>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Upload.Dragger
                disabled={loading}
                maxCount={1}
                showUploadList={false}
                multiple
                customRequest={async (options) => {
                  if (!options.file) return;

                  const file = options.file as RcFile;
                  setLoading(true);

                  try {
                    // const img = await uploadImage(endpoint, file);
                    // notification.success({
                    //   message: `上传成功`,
                    //   description: `${img.name} 上传成功`,
                    // });
                    // await refresh();
                    // onChange(img.name || '');

                    const b64 = await blobToBase64(file);
                    onChange(b64.split(',')?.[1]);
                  } catch {
                    notification.error({
                      message: `上传失败`,
                      description: `${file.name} 上传失败`,
                    });
                  } finally {
                    setLoading(false);
                  }
                }}
              >
                <div>
                  <UploadOutlined style={{ fontSize: '2em' }} />
                </div>
                上传图片
              </Upload.Dragger>
            )}
          </div>
        </Space>
      </Spin>
    </Space>
  );
}
