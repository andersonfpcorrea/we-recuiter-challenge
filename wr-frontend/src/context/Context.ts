import { createContext } from 'react';
import { IPersonData, IPersonReturn } from '../interfaces';

const initialStore: IInitStore = {
  people: null,
  setPeople: null,
  addPerson: null,
  getPeople: null,
  deletePerson: null,
  editPerson: null,
};

interface IInitStore {
  people: IPersonReturn[] | null;
  setPeople: React.Dispatch<
    React.SetStateAction<IPersonReturn[] | null>
  > | null;
  addPerson: ((person: IPersonData) => Promise<void>) | null;
  getPeople: (() => Promise<void>) | null;
  deletePerson: ((id: string) => Promise<void>) | null;
  editPerson: ((id: string, person: IPersonData) => Promise<void>) | null;
}

const Context = createContext(initialStore);

export default Context;
