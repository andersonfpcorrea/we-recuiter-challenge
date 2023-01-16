import { createContext } from 'react';

const initialStore: IInitStore = { people: null, setPeople: () => {} };

interface IInitStore {
  people: Record<string, unknown>[] | null;
  setPeople: React.Dispatch<
    React.SetStateAction<Record<string, unknown>[] | null>
  >;
}

const Context = createContext(initialStore);

export default Context;
