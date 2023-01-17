import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const header = screen.getByText(
    /Ajax CRUD with Bootstrap modals and Datatables/i
  );
  expect(header).toBeInTheDocument();
});
