import { useEffect, useState } from 'react';
import { getPeople } from '../services/requests';

export default function usePeople() {
  const [people, setPeople] = useState<Record<string, unknown>[] | null>(null);
  useEffect(() => {
    getPeople().then((data) => {
      setPeople(data);
    });
  }, []);

  return { people, setPeople };
}
