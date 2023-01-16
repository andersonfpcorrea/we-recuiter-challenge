import { useEffect, useState } from 'react';
import { requestAddPerson, requestGetPeople } from '../services/requests';
import { IAddPersonProps, IAddPersonReturn } from '../interfaces';

export interface IUsePeopleReturn {
  people: IAddPersonReturn[] | null;
  setPeople: React.Dispatch<React.SetStateAction<IAddPersonReturn[] | null>>;
  addPerson: (person: IAddPersonProps) => Promise<IAddPersonReturn>;
  getPeople: () => Promise<void>;
}

export default function usePeople(): IUsePeopleReturn {
  const [people, setPeople] = useState<IAddPersonReturn[] | null>(null);
  useEffect(() => {
    getPeople().catch((err) => {
      console.log(err);
    });
  }, []);

  const getPeople = async (): Promise<void> => {
    const result = await requestGetPeople();
    setPeople(result);
  };

  const addPerson = async (
    person: IAddPersonProps
  ): Promise<IAddPersonReturn> => {
    const result = await requestAddPerson(person);
    return result;
  };

  return { people, setPeople, addPerson, getPeople };
}
