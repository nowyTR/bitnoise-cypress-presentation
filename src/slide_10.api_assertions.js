// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Slide, Notes, CodePane, List, ListItem, Appear } from 'spectacle'

const code = `
  cy.get('button').click().should('have.class', 'active')

  cy.get('.completed').should('have.css', 'text-decoration', 'line-through')

  cy.get('.nav').contains('About')

  cy.get('#loading').should('not.exist')

  cy.get('button').should('be.visible')

  cy.request('/users/1').its('body').should('deep.eq', { name: 'Jane' })

  cy.get(':radio').should('be.checked')

`

export const Slide10 = (
  <Slide controlColor="primary" progressColor="primary" align="flex-start center">
    <Notes>
      <ol style={{ fontSize: '16px', lineHeight: 1.4 }}>
        <li></li>
      </ol>
    </Notes>
    <Heading margin="30px 0 30px 0" size={6} caps lineHeight={1} textColor="primary">
      Api - Asercje
    </Heading>
    <CodePane lang="javascript" source={code} margin="10px auto 30px" />
    <List padding="0 60px 0 0" textSize={26}>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Asercje opisują porządany stan elementów, obiektów i aplikacji
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Występuje tutaj mechanizm powtarzania (auto-retry)
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Używana jest biblioteka Chai z rozszerzeniami Chai-jQuery i Sinon-Chai
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Wiele komend takich jak find(), get(), type(), click() zawiera wbudowane asercje (mają wymagania, które mogą
          spowodować wystąpienie błędu bez potrzeby dodawania dodatkowej asercji)
        </ListItem>
      </Appear>
    </List>
  </Slide>
)
