import { ReactElement } from 'react';
import { IPersonReturn } from '../../interfaces';
import SimplePagination from '../paginations/SimplePagination';

export interface ITableSubInfoProps {
  entriesQty: number;
  listSize: number | undefined;
  pagination: number;
  pages: Array<Array<IPersonReturn | undefined>> | null;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

export default function TableSubInfo({
  entriesQty,
  listSize,
  pagination,
  pages,
  activePage,
  setActivePage,
}: ITableSubInfoProps): ReactElement {
  return (
    <div className="d-flex justify-content-between">
      <span>
        Showing 1 to {entriesQty} of {listSize !== undefined ? listSize : 0}{' '}
        entries
      </span>
      <SimplePagination
        pagination={pagination}
        pages={pages}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </div>
  );
}
