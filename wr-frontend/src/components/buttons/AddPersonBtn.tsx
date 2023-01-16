import { ReactElement, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import Context from '../../context/Context';

export interface IAddPersonBtnProps {
  modalHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddPersonBtn({
  modalHandler,
}: IAddPersonBtnProps): ReactElement {
  const { addPerson } = useContext(Context);
  return (
    <Button
      variant="success"
      size="sm"
      className="d-flex align-items-center justify-content-center gap-2 col-2 text-center"
      onClick={() => modalHandler((prev) => !prev)}
    >
      <BsPlusLg /> Add Person
    </Button>
  );
}
