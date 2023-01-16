import { useEffect, useState } from 'react';
import { getPeople } from '../services/requests';
import { IAddPersonProps } from '../interfaces';

export default function usePeople() {
  const [people, setPeople] = useState<Record<string, unknown>[] | null>(null);
  useEffect(() => {
    getPeople().then((data) => {
      setPeople(data);
    });
  }, []);

  const addPerson = async (person: IAddPersonProps) => {
    const result = await addPerson(person);
    return result;
  };

  return { people, setPeople };
}
