import { createContext } from 'react';
import { IAddPersonProps, IAddPersonReturn } from '../interfaces';

const initialStore: IInitStore = {
  people: null,
  setPeople: null,
  addPerson: null,
  getPeople: null,
};

interface IInitStore {
  people: IAddPersonReturn[] | null;
  setPeople: React.Dispatch<
    React.SetStateAction<IAddPersonReturn[] | null>
  > | null;
  addPerson: ((person: IAddPersonProps) => Promise<IAddPersonReturn>) | null;
  getPeople: (() => Promise<void>) | null;
}

const Context = createContext(initialStore);

export default Context;
