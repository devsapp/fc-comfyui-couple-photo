import { useLocalStorageState } from 'ahooks';
import React from 'react';

export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
  skipKey?: string[]
) {
  const [ls, setLs] = useLocalStorageState<T>(key, {
    serializer: (value) => {
      if (Array.isArray(value)) return JSON.stringify(value);

      try {
        return JSON.stringify(
          Object.entries(value as any)
            .filter(([, v]) => !(typeof v === 'string' && v.length > 200))
            .filter(([k]) => !skipKey || !skipKey.includes(k))
            .reduce(
              (pre, [k, v]) => ({
                ...pre,
                [k]: v,
              }),
              {}
            )
        );
      } catch {
        return JSON.stringify(value);
      }
    },
    deserializer: (value) =>
      Array.isArray(defaultValue)
        ? JSON.parse(value)
        : { ...defaultValue, ...JSON.parse(value) },
    defaultValue,
  });

  const [state, setState] = React.useState(
    Array.isArray(defaultValue)
      ? Array.isArray(ls) && ls.length > 0
        ? ls
        : defaultValue
      : { ...defaultValue, ...ls }
  );

  React.useEffect(() => {
    setLs(state);
  }, [state]);

  // const ref = React.useRef({ state });
  // React.useEffect(() => {
  //   ref.current.state = state;
  // }, [state]);

  // const setState = React.useCallback<React.Dispatch<React.SetStateAction<T>>>(
  //   (value) => {
  //     _setState(
  //       typeof value === 'function' ? (value as any)(ref.current.state) : value
  //     );
  //   },
  //   [ref, _setState]
  // );

  return [state, setState] as [T, React.Dispatch<React.SetStateAction<T>>];
}
