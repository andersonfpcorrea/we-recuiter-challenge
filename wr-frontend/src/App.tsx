import DropdownEntries from './components/inputs/DropdownEntries';
import SearchBar from './components/SearchBar';
import { Stack } from 'react-bootstrap';
import TableMain from './components/tables/MainTable';
import TableSubInfo from './components/tables/TableSubInfo';
import AddPersonBtn from './components/buttons/AddPersonBtn';
import { ReactElement, useState } from 'react';
import FormModal from './components/modals/FormModal';

export default function App(): ReactElement {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="p-4">
      {showModal && <FormModal show={showModal} handleClose={setShowModal} />}
      <h1>Ajax CRUD with Bootstrap modals and Datatables</h1>

      <Stack gap={4}>
        <h2>Person Data</h2>

        <AddPersonBtn modalHandler={setShowModal} />

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
