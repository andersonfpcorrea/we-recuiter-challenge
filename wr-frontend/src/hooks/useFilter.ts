import { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import { IPersonReturn } from '../interfaces';

export interface IUseFilterReturn {
  entriesQty: number;
  setEntriesQty: React.Dispatch<React.SetStateAction<number>>;
  entriesMaxQty: number;
  pagination: number;
  pages: Array<Array<IPersonReturn | undefined>> | null;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

export default function useFilter(): IUseFilterReturn {
  const { people } = useContext(Context);
  const [entriesQty, setEntriesQty] = useState<number>(10);
  const [pagination, setPagination] = useState(1);
  const [pages, setPages] = useState<Array<
    Array<IPersonReturn | undefined>
  > | null>(null);
  const [activePage, setActivePage] = useState(1);
  const entriesMaxQty = 10;

  const defineActivePage = (): void => {
    if (people !== null && people.length > entriesQty) {
      setPagination(Math.ceil(people.length / entriesQty));
    } else {
      setPagination(1);
    }
  };

  const definePages = (): void => {
    if (pagination === null) return;
    if (people === null) return;

    const copy = [...people];
    const allPages = [];

    for (let i = pagination; i > 0; i--) {
      const onePage = [];
      for (let j = entriesQty; j > 0; j--) {
        onePage.push(copy.shift());
      }
      allPages.push(onePage);
    }

    setPages(allPages);
    defineActivePage();
  };

  useEffect(() => {
    definePages();
  }, [pagination, people]);

  useEffect(() => {
    defineActivePage();
  }, [entriesQty, people]);

  return {
    entriesQty,
    setEntriesQty,
    entriesMaxQty,
    pagination,
    pages,
    activePage,
    setActivePage,
  };
}
