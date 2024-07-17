import { ComfyUINode, getObjectInfo } from '@/utils/api';
import React from 'react';

export const defaultContext = {
  objInfo: {} as Record<string, ComfyUINode>,
  endpoint: '',
  refresh: () => {},
};

export const Context = React.createContext(defaultContext);

export function Provider(props: React.PropsWithChildren<{ endpoint: string }>) {
  const { children, endpoint } = props;
  const [state, setState] = React.useState(defaultContext);

  const refresh = React.useCallback(async () => {
    const objInfo = await getObjectInfo(endpoint);
    setState((v) => ({ ...v, objInfo }));
  }, [endpoint]);

  // React.useEffect(() => {
  //   refresh();
  // }, [refresh]);

  React.useEffect(() => {
    setState((v) => ({ ...v, endpoint, refresh }));
  }, [endpoint]);

  return <Context.Provider value={state}>{children}</Context.Provider>;
}
