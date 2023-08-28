describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/maps')
	cy.log('Google Maps are shown.')
	cy.screenshot()
  })
})