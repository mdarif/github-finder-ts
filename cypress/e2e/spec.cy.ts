describe('Github Finder spec', () => {
  it('Visit the main page', () => {
    cy.visit('http://localhost:3002/')
  })

  it('Click on GO button without any value', () => {
    cy.get('.w-full')
    cy.get('form').contains('Go').click()
    // cy.pause()
  })

  it('Search through the github API and get the results', () => {
    cy.get('.w-full').type("mdarif")
    cy.get('form').contains('Go').click()
  })

  it('Click and visit the first Github user profile only', () => {
    cy.get('.text-base-content').first().click()
  })

  it('Visit the user Github Profile in a separate window', () => {
    cy.get('.card-actions').contains('Visit Github Profile').click()
  })

  it('Back to search', () => {
    cy.get('a').contains('Back To Search').click()
  })

  it('Clear the results', () => {
    cy.get('.btn').contains('Clear').click()
  })
})