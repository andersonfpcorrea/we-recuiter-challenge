import Pagination from 'react-bootstrap/Pagination';
import { ReactElement } from 'react';
import { IPersonReturn } from '../../interfaces';

export interface ISimplePagProps {
  pagination: number;
  pages: Array<Array<IPersonReturn | undefined>> | null;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

export default function SimplePagination({
  pagination,
  activePage,
  setActivePage,
}: ISimplePagProps): ReactElement {
  const increasePage = (moveNext: boolean): void => {
    moveNext
      ? setActivePage((prev) => prev + 1)
      : setActivePage((prev) => prev - 1);
  };

  return (
    <Pagination>
      <Pagination.First
        disabled={activePage < 2}
        onClick={() => {
          increasePage(false);
        }}
      >
        Previous
      </Pagination.First>
      {Array.from({ length: pagination }).map((_, i) => (
        <Pagination.Item
          key={i + 1}
          active={i + 1 === activePage}
          onClick={() => {
            setActivePage(i + 1);
          }}
        >
          {i + 1}
        </Pagination.Item>
      ))}
      <Pagination.Last
        disabled={activePage === pagination}
        onClick={() => {
          increasePage(true);
        }}
      >
        Next
      </Pagination.Last>
    </Pagination>
  );
}
