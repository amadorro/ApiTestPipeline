//Create a pipeline CircleCI: 1.type git init, create a .gitignore file in the root directory and add node_modules inside. 2. Push your project to Github.

describe('Api', () => {
  it('Api test', () => {
    cy.visit('https://example.cypress.io')
  })
})