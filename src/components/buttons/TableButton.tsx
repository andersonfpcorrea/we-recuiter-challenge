import { ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';

export interface ITableBtnProps {
  type: 'edit' | 'delete';
}

const btnMap = {
  edit: { text: 'Edit', color: 'primary', icon: <BsFillPencilFill /> },
  delete: { text: 'Delete', color: 'danger', icon: <BsFillTrashFill /> },
};

export default function TableButton({ type }: ITableBtnProps): ReactElement {
  return (
    <Button variant={btnMap[type].color}>
      {btnMap[type].icon}
      {btnMap[type].text}
    </Button>
  );
}
