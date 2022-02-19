import { getGreeting } from '../support/app.po';

describe('nx-react-microfrontend-proxy-demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome nx-react-microfrontend-proxy-demo');
  });
});
