import { InputNumber,Slider,Space } from 'antd';

import styles from './style.scss';
export function Number(props: {
  title: string;
  description?: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  inPanel?: boolean;
}) {
  const { title, description, value, onChange, min, max, step, inPanel } =
    props;

  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <div className={inPanel ? styles['title-inside'] : styles.title}>
        {title}
      </div>

      <Space.Compact block>
        <Slider
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(v) => onChange(v)}
          style={{ width: 'calc(100% - 100px)' }}
        />
        <InputNumber
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(v) => onChange(v || 1)}
        />
      </Space.Compact>

      {description && <div className={styles.description}>{description}</div>}
    </Space>
  );
}
