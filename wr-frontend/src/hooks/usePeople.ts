import { useEffect, useState } from 'react';
import { requestAddPerson, requestGetPeople } from '../services/requests';
import { IAddPersonProps, IAddPersonReturn } from '../interfaces';

export default function usePeople() {
  const [people, setPeople] = useState<IAddPersonReturn[] | null>(null);
  useEffect(() => {
    getPeople();
  }, []);

  const getPeople = async () => {
    const result = await requestGetPeople();
    setPeople(result);
  };

  const addPerson = async (
    person: IAddPersonProps
  ): Promise<IAddPersonReturn> => {
    const result = await requestAddPerson(person);
    return result;
  };

  return { people, setPeople, addPerson };
}
