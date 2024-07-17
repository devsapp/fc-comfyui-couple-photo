import { Progress as AntdProgress } from 'antd';
export { getTotalProgress } from './utils';

export function Progress(props: {
  precent: number;
  currentNode?: string;
  currentPrecent?: number;
  finished?: boolean;
}) {
  const { precent, currentNode, currentPrecent, finished } = props;

  return (
    <>
      <AntdProgress percent={finished ? 100 : Math.floor(precent * 100)} />
      {!finished && currentNode && (
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ whiteSpace: 'nowrap' }}>{currentNode}</div>
          <AntdProgress
            percent={finished ? 100 : Math.floor((currentPrecent || 0) * 100)}
          />
        </div>
      )}
    </>
  );
}
