import { ReactElement, useContext } from 'react';
import Table from 'react-bootstrap/Table';
import data from './dataMainTable';
import TableButton from '../buttons/TableButton';
import { TbArrowsSort } from 'react-icons/tb';
import { BsSortDownAlt } from 'react-icons/bs';
import { Button, Stack } from 'react-bootstrap';
import Context from '../../context/Context';
import { IPersonReturn, IShowModal } from '../../interfaces';

export interface ITableMainProps {
  modalHandler: React.Dispatch<React.SetStateAction<IShowModal>>;
  entriesQty: number;
  activePage: number;
  pages: Array<Array<IPersonReturn | undefined>> | null;
}

export default function TableMain({
  modalHandler,
  entriesQty,
  activePage,
  pages,
}: ITableMainProps): ReactElement {
  const { deletePerson } = useContext(Context);

  const headers = data.headers.map((header, i) => (
    <th key={`${header}${i}`}>
      <Stack gap={1} direction="horizontal">
        <span>{header}</span>
        {i > 0 && i < data.headers.length - 1 && (
          <Button variant="none">
            <TbArrowsSort color="gray" />
          </Button>
        )}
        {i === 0 && (
          <Button variant="none">
            <BsSortDownAlt color="gray" />
          </Button>
        )}
      </Stack>
    </th>
  ));

  return (
    <Table striped bordered>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>
        {pages?.[activePage - 1]?.map((person, i) => {
          if (person !== undefined)
            return (
              <tr key={person?._id}>
                <td>{person?.firstName}</td>
                <td>{person?.lastName}</td>
                <td>{person?.gender}</td>
                <td>{person?.dob}</td>
                <td>{person?.address}</td>
                <td>
                  <TableButton
                    type="edit"
                    clickHandler={() => {
                      modalHandler({
                        open: true,
                        edit: true,
                        idToEdit:
                          person?._id === undefined ? null : person?._id,
                      });
                    }}
                  />
                  <TableButton
                    type="delete"
                    clickHandler={() => {
                      void deletePerson?.(
                        person?._id === undefined ? '' : person?._id
                      );
                    }}
                  />
                </td>
              </tr>
            );
          return null;
        })}
      </tbody>
      <tfoot>
        <tr>{headers}</tr>
      </tfoot>
    </Table>
  );
}
