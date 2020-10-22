import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <StaticRouter>
      <App />
    </StaticRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});

// test('renders learn react link', () => {
//   const { getByText } = render(
//     <StaticRouter>
//       <App />
//     </StaticRouter>
//   );
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
