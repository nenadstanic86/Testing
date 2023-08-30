describe('template spec', () => {
  it('passes', () => {
	  
	cy.log('Open Google maps.')  
    cy.visit('https://www.google.com/maps')
	cy.log('Google maps app is opened.')
	cy.screenshot()
	
	cy.get('#searchboxinput').type('Schneider Electric LLC, Put partizanskog novosadskog odreda, Novi Sad')
	cy.get('#searchbox-searchbutton').click()
	cy.wait(2000)
	cy.screenshot()
	
	cy.log('First zoom in level.') 
	cy.get('#widget-zoom-in').click()
	cy.wait(2000)
	cy.screenshot()
	
	cy.log('Second zoom level.') 
	cy.get('#widget-zoom-in').click()
	cy.wait(2000)
	cy.screenshot()
  })
})