import DropdownEntries from './components/inputs/DropdownEntries';
import SearchBar from './components/SearchBar';
import { Stack } from 'react-bootstrap';
import TableMain from './components/tables/MainTable';
import TableSubInfo from './components/tables/TableSubInfo';
import AddPersonBtn from './components/buttons/AddPersonBtn';
import { ReactElement, useContext, useState } from 'react';
import FormModal from './components/modals/FormModal';
import { IShowModal } from './interfaces';
import useFilter from './hooks/useFilter';
import Context from './context/Context';

export default function App(): ReactElement {
  const [showModal, setShowModal] = useState<IShowModal>({
    open: false,
    edit: false,
    idToEdit: null,
  });
  const {
    entriesQty,
    setEntriesQty,
    entriesMaxQty,
    pagination,
    pages,
    activePage,
    setActivePage,
  } = useFilter();
  const { people } = useContext(Context);
  return (
    <main className="p-4">
      {showModal.open && (
        <FormModal
          show={showModal.open}
          edit={showModal.edit}
          idToEdit={showModal.idToEdit}
          handleClose={setShowModal}
        />
      )}
      <h1>Ajax CRUD with Bootstrap modals and Datatables</h1>

      <Stack gap={4}>
        <h2>Person Data</h2>

        <AddPersonBtn modalHandler={setShowModal} />

        <Stack
          direction="horizontal"
          className="d-flex justify-content-between"
        >
          <DropdownEntries
            optQty={entriesMaxQty}
            value={entriesQty}
            setValue={setEntriesQty}
          />
          <SearchBar />
        </Stack>

        <TableMain
          modalHandler={setShowModal}
          entriesQty={entriesQty}
          activePage={activePage}
          pages={pages}
        />
        <TableSubInfo
          entriesQty={entriesQty}
          listSize={people?.length}
          pagination={pagination}
          pages={pages}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </Stack>
    </main>
  );
}
