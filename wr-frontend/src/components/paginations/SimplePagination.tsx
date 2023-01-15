import Pagination from 'react-bootstrap/Pagination';
import { ReactElement, useMemo, useState } from 'react';

export default function SimplePagination(): ReactElement {
  const [active, setActive] = useState(1);
  const [pages, setPages] = useState(3);

  const pagination = useMemo(() => {
    let items = [];
    for (let number = 1; number <= pages; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }
    return items;
  }, [pages, active]);

  const increasePage = (moveNext: boolean): void => {
    moveNext ? setActive((prev) => prev + 1) : setActive((prev) => prev - 1);
  };

  return (
    <Pagination>
      <Pagination.First
        disabled={active < 2}
        onClick={() => increasePage(false)}
      >
        Previous
      </Pagination.First>
      {pagination}
      <Pagination.Last
        disabled={active === pages}
        onClick={() => increasePage(true)}
      >
        Next
      </Pagination.Last>
    </Pagination>
  );
}
