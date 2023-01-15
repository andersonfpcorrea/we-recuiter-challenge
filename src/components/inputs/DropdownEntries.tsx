import { ReactElement, useMemo } from 'react';

export interface IDropdownEntriesProps {
  optQty: number;
}

export default function DropdownEntries({
  optQty,
}: IDropdownEntriesProps): ReactElement {
  const options = useMemo(() => {
    const opts = [];
    for (let i = 0; i < optQty; i++) {
      opts.push(
        <option key={i} value={i + 1}>
          {i + 1}
        </option>
      );
    }
    return opts;
  }, [optQty]);

  return (
    <div className='d-flex gap-1'>
      <span>Show:</span>
      <select>{options}</select>
      <span>entries</span>
    </div>
  );
}
