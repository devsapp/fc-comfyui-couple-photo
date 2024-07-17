import { ComfyUIPrompt, ComfyUIPromptEditPanel } from '@/utils/api';
import { Space, notification } from 'antd';
import React from 'react';
import { ImageUploader } from './Image';
import { Number } from './Number';
import { Text } from './Text';
import { Context } from './context';

import styles from './style.scss';

export function Panel<T extends string | number>(props: {
  panel: ComfyUIPromptEditPanel;
  values: ComfyUIPrompt;
  onValuesChange: React.Dispatch<React.SetStateAction<ComfyUIPrompt>>;
  inPanel?: boolean;
}) {
  const { panel, values, onValuesChange, inPanel } = props;

  const value = React.useMemo(
    () => values?.[panel?.id || '']?.inputs?.[panel?.key || ''],
    [values, panel?.id, panel?.key]
  );

  const onChange = React.useCallback(
    (v: T) =>
      onValuesChange((old) => {
        const newObj = { ...old };
        try {
          newObj[panel?.id || ''].inputs[panel?.key] = v;
        } catch (e) {
          notification.error({
            message: '工作流配置错误',
            description: `请反馈给工作人员：${panel.title}#${panel?.id}#${panel?.key}`,
          });
          console.error(e);
        }
        return newObj;
      }),
    [onValuesChange, panel?.id, panel?.key]
  );

  const { objInfo } = React.useContext(Context);
  switch (panel.type) {
    case 'group':
      return (
        <Space direction='vertical' className={styles.image_wrapper}>
          <div className={styles.title}>{panel?.title}</div>
          {panel?.description && (
            <div className={styles.description}>{panel?.description}</div>
          )}
          <Space direction='vertical' style={{ padding: 12 }}>
            {(panel?.children || []).map((p) => (
              <Panel
                key={[
                  p?.id || '',
                  p?.key || '',
                  p?.title || '',
                  p?.type || '',
                ].join('#')}
                panel={p}
                values={values}
                onValuesChange={onValuesChange}
                inPanel
              />
            ))}
          </Space>
        </Space>
      );
    case 'image':
      return (
        <ImageUploader
          title={panel.title}
          description={panel.description}
          value={value as string}
          onChange={(v) => onChange(v as T)}
          images={
            typeof panel.options === 'string'
              ? ((objInfo[panel.options]?.input?.required?.[panel.key] ||
                  objInfo[panel.options]?.input?.optional?.[
                    panel.key
                  ])?.[0] as string[])
              : Array.isArray(panel.options)
              ? panel.options
              : []
          }
          inPanel={inPanel}
        />
      );
    case 'select':
    case 'number':
      return (
        <Number
          title={panel.title}
          description={panel.description}
          value={value as number}
          onChange={(v) => onChange(v as T)}
          min={panel.min}
          max={panel.max}
          step={panel.step}
          inPanel={inPanel}
        />
      );
    case 'string':
      return (
        <Text
          title={panel.title}
          description={panel.description}
          value={value as string}
          onChange={(v) => onChange(v as T)}
          inPanel={inPanel}
        />
      );
    default:
      return <div>unsupport {JSON.stringify(panel)}</div>;
  }
}
