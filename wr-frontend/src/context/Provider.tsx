import { PropsWithChildren, ReactElement } from 'react';
import Context from './Context';
import usePeople from '../hooks/usePeople';

export default function ContextProvider({
  children,
}: PropsWithChildren): ReactElement {
  const { people, setPeople, addPerson, getPeople } = usePeople();
  const store = { people, setPeople, addPerson, getPeople };
  return <Context.Provider value={store}>{children}</Context.Provider>;
}
