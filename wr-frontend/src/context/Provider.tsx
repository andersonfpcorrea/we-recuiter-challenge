import { PropsWithChildren, ReactElement } from 'react';
import Context from './Context';
import usePeople from '../hooks/usePeople';

export default function ContextProvider({
  children,
}: PropsWithChildren): ReactElement {
  const { people, setPeople, addPerson } = usePeople();
  const store = { people, setPeople, addPerson };
  return <Context.Provider value={store}>{children}</Context.Provider>;
}
