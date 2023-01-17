import { PropsWithChildren, ReactElement } from 'react';
import Context from './Context';
import usePeople from '../hooks/usePeople';

export default function ContextProvider({
  children,
}: PropsWithChildren): ReactElement {
  const { people, setPeople, addPerson, getPeople, deletePerson, editPerson } =
    usePeople();
  const store = {
    people,
    setPeople,
    addPerson,
    getPeople,
    deletePerson,
    editPerson,
  };
  return <Context.Provider value={store}>{children}</Context.Provider>;
}
