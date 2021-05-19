describe('Test cy.intercept()', () => {
  beforeEach(() => {
    cy.visit('/online-store/')
  })

  it.only('[1] 1st test cy.intercept()', () => {
    cy.intercept('GET', '/api/true/search/product?q=iPad%20Pro&page=1&limit=36&section=wemall').as('getSearch')
    cy.get('input[placeholder="Search for your product ..."]').type('iPad Pro').then(() => {
        cy.get('div[class="search-container"] button').click()
        cy.wait('@getSearch')
    })
  })
})
