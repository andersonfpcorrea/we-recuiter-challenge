import { ReactElement } from 'react';

export default function SearchBar(): ReactElement {
  return (
    <div className='d-flex gap-1 justify-content-end'>
      <span>Search:</span>
      <input type={'search'} className='col-8' />
    </div>
  );
}
