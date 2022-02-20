import { ComponentLibrary } from '@company/component-library';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <h1>Hello From Web</h1>
      <ComponentLibrary />

      <a href="/profile">Profile</a>
    </StyledApp>
  );
}

export default App;
