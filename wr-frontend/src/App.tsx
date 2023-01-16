import Button from 'react-bootstrap/Button';
import { BsPlusLg } from 'react-icons/bs';
import DropdownEntries from './components/inputs/DropdownEntries';
import SearchBar from './components/SearchBar';
import { Stack } from 'react-bootstrap';
import TableMain from './components/tables/MainTable';
import TableSubInfo from './components/tables/TableSubInfo';
import usePeople from './hooks/usePeople';

export default function App() {
  return (
    <main className="p-4">
      <h1>Ajax CRUD with Bootstrap modals and Datatables</h1>

      <Stack gap={4}>
        <h2>Person Data</h2>

        <Button
          variant="success"
          size="sm"
          className="d-flex align-items-center justify-content-center gap-2 col-2 text-center"
        >
          <BsPlusLg /> Add Person
        </Button>

        <Stack
          direction="horizontal"
          className="d-flex justify-content-between"
        >
          <DropdownEntries optQty={10} />
          <SearchBar />
        </Stack>

        <TableMain />
        <TableSubInfo />
      </Stack>
    </main>
  );
}
