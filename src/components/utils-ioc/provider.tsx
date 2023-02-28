import React, { ReactElement, useContext } from 'react';
import { Container, interfaces } from 'inversify';

const InversifyContext = React.createContext<{ container: Container | null }>({ container: null });

type Props = {
  container: Container;
  children: ReactElement;
};

export const Provider: React.FC<Props> = (props) => {
  return <InversifyContext.Provider value={{ container: props.container }} {...props} />;
};

export function useInjection<T>(id: interfaces.ServiceIdentifier<T>) {
  const { container } = useContext(InversifyContext);
  if (!container) {
    throw new Error("can't be used outside of inversify context");
  }
  return container.get(id);
}
