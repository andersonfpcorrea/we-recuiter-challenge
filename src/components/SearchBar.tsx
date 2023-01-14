import { ReactElement } from 'react';

export default function SearchBar(): ReactElement {
  return (
    <div>
      <span>Search</span>
      <input type={'search'} />
    </div>
  );
}
