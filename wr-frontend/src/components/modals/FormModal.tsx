import React, { ReactElement, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Context from '../../context/Context';
import { IPersonData, IShowModal } from '../../interfaces';

export interface IFormModalProps {
  show: boolean;
  edit: boolean;
  idToEdit: string | null;
  handleClose: React.Dispatch<React.SetStateAction<IShowModal>>;
}

export default function FormModal({
  show,
  edit,
  idToEdit,
  handleClose,
}: IFormModalProps): ReactElement {
  const { addPerson, editPerson } = useContext(Context);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const data = Object.fromEntries([
      ...new FormData(e.currentTarget),
    ]) as unknown as IPersonData;

    edit && idToEdit !== null
      ? editPerson?.(idToEdit, data)
      : addPerson?.(data);

    handleClose({ open: false, edit: false, idToEdit: null });
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose({ open: false, edit: false, idToEdit: null });
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add new person</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John"
              required
              name="firstName"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Chrysostomos"
              required
              name="lastName"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder="male"
              required
              name="gender"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Constantinople"
              required
              name="address"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dob">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" required name="dob" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
