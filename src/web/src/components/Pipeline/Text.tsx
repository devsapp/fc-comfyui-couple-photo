import { Input,Space } from 'antd';
import styles from './style.scss';
export function Text(props: {
  title: string;
  description?: string;
  value: string;
  onChange: (value: string) => void;
  inPanel?: boolean;
}) {
  const { title, description, value, onChange, inPanel } = props;

  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <div className={inPanel ? styles['title-inside'] : styles.title}>
        {title}
      </div>
      <Input.TextArea
        className={styles.scrollbar}
        rows={5}
        value={value}
        onChange={(e) => onChange(e?.target?.value || '')}
        placeholder={description}
      />
    </Space>
  );
}
