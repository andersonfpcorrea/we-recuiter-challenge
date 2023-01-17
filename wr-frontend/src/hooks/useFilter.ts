import { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

export interface IUseFilterReturn {
  entriesQty: number;
  setEntriesQty: React.Dispatch<React.SetStateAction<number>>;
  entriesMaxQty: number;
  pages: number;
}

export default function useFilter(): IUseFilterReturn {
  const { people } = useContext(Context);
  const [entriesQty, setEntriesQty] = useState<number>(10);
  const [pages, setPages] = useState(1);
  const entriesMaxQty = 10;

  useEffect(() => {
    if (people !== null && people.length > entriesQty) {
      console.log(Math.ceil(people.length / entriesQty));
      console.log(entriesQty);
      setPages(Math.ceil(people.length / entriesQty));
    } else setPages(1);
  }, [entriesQty, people]);

  return { entriesQty, setEntriesQty, entriesMaxQty, pages };
}
