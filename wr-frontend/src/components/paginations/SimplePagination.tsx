import Pagination from 'react-bootstrap/Pagination';
import { ReactElement, useState } from 'react';

export interface ISimplePagProps {
  pages: number;
}

export default function SimplePagination({
  pages,
}: ISimplePagProps): ReactElement {
  const [active, setActive] = useState(1);

  const increasePage = (moveNext: boolean): void => {
    moveNext ? setActive((prev) => prev + 1) : setActive((prev) => prev - 1);
  };

  return (
    <Pagination>
      <Pagination.First
        disabled={active < 2}
        onClick={() => {
          increasePage(false);
        }}
      >
        Previous
      </Pagination.First>
      {Array.from({ length: pages }).map((_, i) => (
        <Pagination.Item key={i + 1} active={i + 1 === active}>
          {i + 1}
        </Pagination.Item>
      ))}
      <Pagination.Last
        disabled={active === pages}
        onClick={() => {
          increasePage(true);
        }}
      >
        Next
      </Pagination.Last>
    </Pagination>
  );
}
