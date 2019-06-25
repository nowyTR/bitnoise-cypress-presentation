// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Slide, Notes, CodePane, List, ListItem, Appear } from 'spectacle'

const code = `
  cy.get('button').click()

  cy.contains('Welcome').dblclick() 

  cy.get('input').type('Hello, World')

  cy.get('[type="radio"]').first().check()

  cy.get('a').trigger('mousedown')

`

export const Slide9 = (
  <Slide controlColor="primary" progressColor="primary" align="flex-start center">
    <Notes>
      <ol style={{ fontSize: '16px', lineHeight: 1.4 }}>
        <li>Komendy symulują interakcje usera</li>
      </ol>
    </Notes>
    <Heading margin="30px 0 30px 0" size={6} caps lineHeight={1} textColor="primary">
      Api - Interakcje
    </Heading>
    <CodePane lang="javascript" source={code} margin="10px auto 30px" />
    <List padding="0 60px 0 0" textSize={26}>
      Zestaw akcji, które są wykonywane przed wywołaniem eventu:
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          przeskroluj do elementu
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          upewnij się że element nie jest ukryty
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          upewnij się że element nie jest disabled
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          upewnij się że element nie animuje się
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          upewnij się że element nie jest przykryty
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          przescrolluj stronę by sprawdzić czy element nie jest przykryty przez inny z fixed position
        </ListItem>
      </Appear>
    </List>
  </Slide>
)
