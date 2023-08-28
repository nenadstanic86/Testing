describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.b92.net/')
	cy.log('B92 site is opened.')
	cy.screenshot()
  })
})