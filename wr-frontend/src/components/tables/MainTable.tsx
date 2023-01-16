import { ReactElement, useContext } from 'react';
import Table from 'react-bootstrap/Table';
import data from './dataMainTable';
import TableButton from '../buttons/TableButton';
import { TbArrowsSort } from 'react-icons/tb';
import { BsSortDownAlt } from 'react-icons/bs';
import { Button, Stack } from 'react-bootstrap';
import Context from '../../context/Context';

export default function TableMain(): ReactElement {
  const { people } = useContext(Context);
  console.log(people);

  const headers = data.headers.map((header, i) => (
    <th key={header + i}>
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
        {people?.map((person) => (
          <tr key={person._id}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.gender}</td>
            <td>{person.dob}</td>
            <td>{person.address}</td>
            <td>
              <TableButton type="edit" />
              <TableButton type="delete" />
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>{headers}</tr>
      </tfoot>
    </Table>
  );
}
