import styled from 'styled-components';

import { Route, Link, Routes } from 'react-router-dom';
import { ComponentLibrary } from '@company/component-library';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <h1>Hello From Profile</h1>
      <ComponentLibrary />

      <div role="navigation">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/profile/page-2">Profile Page 2</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/profile">
          <Route path="" element={<h2>Profile root path</h2>} />
          <Route path="page-2" element={<h2>Profile page 2 path</h2>} />
        </Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
