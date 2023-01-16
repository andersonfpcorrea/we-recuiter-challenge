export async function getPeople() {
  const response = await fetch('http://localhost:3001/api', {});
  const data = await response.json();
  return data;
}

export async function deletePerson(id: string) {
  const response = await fetch(`http://localhost:3001/api/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  return data;
}

export async function editPerson(id: string) {
  const response = await fetch(`http://localhost:3001/api/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  return data;
}
