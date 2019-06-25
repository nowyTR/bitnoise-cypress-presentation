// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Slide, Notes, CodePane, List, ListItem, Appear, S } from 'spectacle'

const code = `
  cy.server()
  cy.route({
    method: 'POST',
    url: '/avatar/*',    
    status: 500,
    response: {}
  })

  cy.server()

  // we set the response to be the activites.json fixture
  cy.route('GET', 'activities/*', 'fixture:activities.json').as('getActivities') // alias

  // forces Cypress to wait
  // until it sees a response for each request that matches
  // each of these aliases
  cy.wait(['@getActivities', '@getMessages'])

`

export const Slide11 = (
  <Slide controlColor="primary" progressColor="primary" align="flex-start center">
    <Notes>
      <ol>
        <li>
          komenda wait pozwala na deklaratywne czekanie na response requestu (wykonywanie następnych poleceń jest
          wstrzymane) - dzieki temu testy są bardziej przewidywalne (np. testowanie komponentu autocomplete), pozwala na
          tworzenie asercji do obiektu XHR
        </li>
        <li>Stubujemy większość requestów, tylko te w krytycznych procesach aplikacji nie są stubowane</li>
      </ol>
    </Notes>
    <Heading margin="30px 0 30px 0" size={6} caps lineHeight={1} textColor="primary">
      Api - Network requesty
    </Heading>
    <CodePane lang="javascript" source={code} margin="10px auto 30px" />
    <List padding="0 60px 0 0" textSize={26}>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Za pomocą server() włączamy kontrolę nad wszystkimi requestami do końca testu
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Możemy dzięki temu łatwo stubować response i kontrolować <S type="italic">body</S>,{' '}
          <S type="italic">status</S> i <S type="italic">headers</S>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          route() przypisuje dany response do requestu (tabela routingu)
        </ListItem>
      </Appear>
    </List>
  </Slide>
)
