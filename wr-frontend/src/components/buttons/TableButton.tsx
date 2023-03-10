import { ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';

export interface ITableBtnProps {
  type: 'edit' | 'delete';
  clickHandler: () => void;
}

const btnMap = {
  edit: { text: 'Edit', color: 'primary', icon: <BsFillPencilFill /> },
  delete: { text: 'Delete', color: 'danger', icon: <BsFillTrashFill /> },
};

export default function TableButton({
  type,
  clickHandler,
}: ITableBtnProps): ReactElement {
  return (
    <Button
      type="button"
      className={`bg-${btnMap[type].color} text-light border border-white`}
      onClick={clickHandler}
    >
      {btnMap[type].icon}
      {btnMap[type].text}
    </Button>
  );
}
