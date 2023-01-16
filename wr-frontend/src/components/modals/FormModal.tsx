import { ReactElement } from 'react';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export interface IFormModalProps {
  show: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormModal({
  show,
  handleClose,
}: IFormModalProps): ReactElement {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const data = Object.fromEntries([...new FormData(e.currentTarget)]);
    console.log(data);
  };
  return (
    <Modal show={show} onHide={() => handleClose(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add new person</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="John" autoFocus required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Chrysostomos" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" placeholder="Chrysostomos" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Chrysostomos" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="text" placeholder="Chrysostomos" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
