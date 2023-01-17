import { IPersonData, IPersonReturn } from '../interfaces';

export async function requestGetPeople(): Promise<IPersonReturn[]> {
  const response = await fetch('http://localhost:3001/api', {});
  const data = (await response.json()) as IPersonReturn[];
  return data;
}

export async function requestDeletePerson(id: string): Promise<IPersonReturn> {
  const response = await fetch(`http://localhost:3001/api/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = (await response.json()) as IPersonReturn;
  return data;
}

export async function requestEditPerson(
  id: string,
  person: IPersonData
): Promise<IPersonReturn> {
  const response = await fetch(`http://localhost:3001/api/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(person),
  });
  const data = (await response.json()) as IPersonReturn;
  return data;
}

export async function requestAddPerson(
  person: IPersonData
): Promise<IPersonReturn> {
  const response = await fetch('http://localhost:3001/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(person),
  });
  const data = (await response.json()) as IPersonReturn;
  return data;
}
