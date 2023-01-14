import Button from 'react-bootstrap/Button';
import { BsPlusLg } from 'react-icons/bs';
import DropdownEntries from './components/inputs/DropdownEntries';
import SearchBar from './components/SearchBar';
import { Stack } from 'react-bootstrap';
import TableMain from './components/tables/MainTable';

export default function App() {
  return (
    <main>
      <Button variant='success' className='d-flex align-items-center'>
        <BsPlusLg /> Add Person
      </Button>

      <Stack direction='horizontal' className='d-flex justify-content-between'>
        <DropdownEntries optQty={10} />
        <SearchBar />
      </Stack>

      <TableMain />
    </main>
  );
}
