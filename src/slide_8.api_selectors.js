// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Slide, Notes, CodePane, Image, Appear } from 'spectacle'

const code = `
  cy.get('[data-cy=submit]')

  cy.get('.article').find('footer')

  cy.get('td').closest('.filled')

  cy.get('nav a').first()

  cy.get('#main-content')
   .find('.article')
   .children('img[src^="/static"]')
   .first()

`

export const Slide8 = (
  <Slide controlColor="primary" progressColor="primary" align="flex-start center">
    <Notes>
      <ol style={{ fontSize: '16px', lineHeight: 1.4 }}>
        <li>Cypress używa silnika jQuery do obsługi selektorów</li>
        <li>Cypress nie zwraca elementu synchronicznie (then)</li>
      </ol>
    </Notes>
    <Heading margin="30px 0 30px 0" size={6} caps lineHeight={1} textColor="primary">
      Api - Selektory
    </Heading>
    <CodePane lang="javascript" source={code} margin="10px auto 30px" />
    <Appear>
      <Image height={200} src={require('./assets/jquery_logo.png')} />
    </Appear>
  </Slide>
)
