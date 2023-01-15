import { ReactElement } from 'react';
import Table from 'react-bootstrap/Table';
import data from './dataMainTable';
import TableButton from '../buttons/TableButton';
import { TbArrowsSort } from 'react-icons/tb';
import { BsSortDownAlt } from 'react-icons/bs';
import { Button, Stack } from 'react-bootstrap';

export default function TableMain(): ReactElement {
  const headers = data.headers.map((header, i) => (
    <th key={header + i}>
      <Stack gap={1} direction='horizontal'>
        <span>{header}</span>
        {i > 0 && i < data.headers.length - 1 && (
          <Button variant='none'>
            <TbArrowsSort color='gray' />
          </Button>
        )}
        {i === 0 && (
          <Button variant='none'>
            <BsSortDownAlt color='gray' />
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
        {data.dataRows.map((row, i) => (
          <tr key={row[i] + i}>
            {row.map((r, index) => (
              <td key={r + i}>{r}</td>
            ))}
            <TableButton type='edit' />
            <TableButton type='delete' />
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>{headers}</tr>
      </tfoot>
    </Table>
  );
}
