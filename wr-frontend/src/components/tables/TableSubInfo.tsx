import { ReactElement } from 'react';
import SimplePagination from '../paginations/SimplePagination';

export interface ITableSubInfoProps {
  entriesQty: number;
  listSize: number | undefined;
  pages: number;
}

export default function TableSubInfo({
  entriesQty,
  listSize,
  pages,
}: ITableSubInfoProps): ReactElement {
  return (
    <div className="d-flex justify-content-between">
      <span>
        Showing 1 to {entriesQty} of {listSize !== undefined ? listSize : 0}{' '}
        entries
      </span>
      <SimplePagination pages={pages} />
    </div>
  );
}
