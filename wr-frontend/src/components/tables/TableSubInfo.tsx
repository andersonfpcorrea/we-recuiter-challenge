import { ReactElement } from 'react';
import SimplePagination from '../paginations/SimplePagination';

export default function TableSubInfo(): ReactElement {
  return (
    <div className="d-flex justify-content-between">
      <span>Showing 1 to 5 of 5 entries</span>
      <SimplePagination />
    </div>
  );
}
