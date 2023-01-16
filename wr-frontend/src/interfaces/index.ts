export interface IAddPersonProps {
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  dob: string;
}

export interface IAddPersonReturn extends IAddPersonProps {
  _id: string;
}
