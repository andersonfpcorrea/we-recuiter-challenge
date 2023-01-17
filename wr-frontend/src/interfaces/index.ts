export interface IPersonData {
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  dob: string;
}

export interface IPersonReturn extends IPersonData {
  _id: string;
}

export interface IShowModal {
  open: boolean;
  edit: boolean;
  idToEdit: string | null;
}
