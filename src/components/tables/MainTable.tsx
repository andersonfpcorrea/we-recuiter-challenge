import { ReactElement } from 'react';
import Table from 'react-bootstrap/Table';
import data from './dataMainTable';
import TableButton from '../buttons/TableButton';

export default function TableMain(): ReactElement {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {data.headers.map((header, i) => (
            <th key={header + i}>{header}</th>
          ))}
        </tr>
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
    </Table>
  );
}
