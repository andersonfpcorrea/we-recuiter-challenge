import { useEffect, useState } from 'react';
import {
  requestAddPerson,
  requestDeletePerson,
  requestEditPerson,
  requestGetPeople,
} from '../services/requests';
import { IPersonData, IPersonReturn } from '../interfaces';

export interface IUsePeopleReturn {
  people: IPersonReturn[] | null;
  setPeople: React.Dispatch<React.SetStateAction<IPersonReturn[] | null>>;
  addPerson: (person: IPersonData) => Promise<void>;
  getPeople: () => Promise<void>;
  deletePerson: (id: string) => Promise<void>;
  editPerson: (id: string, person: IPersonData) => Promise<void>;
}

export default function usePeople(): IUsePeopleReturn {
  const [people, setPeople] = useState<IPersonReturn[] | null>(null);
  useEffect(() => {
    getPeople().catch((err) => {
      console.log(err);
    });
  }, []);

  const getPeople = async (): Promise<void> => {
    const result = await requestGetPeople();
    setPeople(result);
  };

  const addPerson = async (person: IPersonData): Promise<void> => {
    await requestAddPerson(person);
    getPeople().catch((err) => {
      console.error(err);
    });
  };

  const deletePerson = async (id: string): Promise<void> => {
    await requestDeletePerson(id);
    getPeople().catch((err) => {
      console.error(err);
    });
  };

  const editPerson = async (id: string, person: IPersonData): Promise<void> => {
    await requestEditPerson(id, person);
    getPeople().catch((err) => {
      console.error(err);
    });
  };

  return { people, setPeople, addPerson, getPeople, deletePerson, editPerson };
}
