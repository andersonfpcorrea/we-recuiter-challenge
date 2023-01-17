import { ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import { IShowModal } from '../../interfaces';

export interface IAddPersonBtnProps {
  modalHandler: React.Dispatch<React.SetStateAction<IShowModal>>;
}

export default function AddPersonBtn({
  modalHandler,
}: IAddPersonBtnProps): ReactElement {
  return (
    <Button
      variant="success"
      size="sm"
      className="d-flex align-items-center justify-content-center gap-2 col-2 text-center"
      onClick={() => {
        modalHandler({ open: true, edit: false, idToEdit: null });
      }}
    >
      <BsPlusLg /> Add Person
    </Button>
  );
}
