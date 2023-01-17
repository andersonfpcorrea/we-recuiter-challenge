import { useState } from 'react';

export interface IUseFilterReturn {
  entriesQty: number;
  setEntriesQty: React.Dispatch<React.SetStateAction<number>>;
  entriesMaxQty: number;
}

export default function useFilter(): IUseFilterReturn {
  const [entriesQty, setEntriesQty] = useState<number>(10);
  const entriesMaxQty = 10;

  return { entriesQty, setEntriesQty, entriesMaxQty };
}
