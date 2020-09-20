import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <StaticRouter>
      <App />
    </StaticRouter>
  );
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
