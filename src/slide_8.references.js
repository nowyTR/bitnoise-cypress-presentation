// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Slide, Notes, S, Link, List, ListItem } from 'spectacle'

export const Slide8 = (
  <Slide controlColor="primary" progressColor="primary">
    <Notes>
      {' '}
      <ol>
        <li>Podsumowanie</li>
        <li>
          Warto zacząć przygodę z testowaniem od Cypressa, ma niski próg wejścia i jest przystępny dla początkujących.
          Kiedy się z nim oswoisz łatwiej będzie pisać testy jednostkowe i integracyjne.
        </li>
        <li>O źródłach</li>
        <li>Czas na pytania</li>
      </ol>
    </Notes>
    <Heading margin="30px 0 30px 0" size={6} caps lineHeight={1} textColor="primary">
      Źródła
    </Heading>
    <List bulletStyle="arrow">
      <ListItem textSize={26} margin="10px 0">
        <Link textColor="#ffc" href="https://cypress.io">
          <S type="underline">cypress.io</S>
        </Link>
      </ListItem>
      <ListItem textSize={26} margin="10px 0">
        <Link textColor="#ffc" href="https://www.youtube.com/watch?v=pXyBligMMr0">
          <S type="underline">Cypress: The future of E2E testing</S>
        </Link>{' '}
        - Dominic Elm
      </ListItem>
      <ListItem textSize={26} margin="10px 0">
        <Link textColor="#ffc" href="https://www.youtube.com/watch?v=5XQOK0v_YRE">
          <S type="underline">I see your point, but… (Part1)</S>
        </Link>{' '}
        - Brian Mann
      </ListItem>
      <ListItem textSize={26} margin="10px 0">
        <Link textColor="#ffc" href="https://www.youtube.com/watch?v=5FnalKRjpZk">
          <S type="underline">I see your point, but… (Part2)</S>
        </Link>{' '}
        - Gleb Bahmutov
      </ListItem>
      <ListItem textSize={26} margin="10px 0">
        <Link textColor="#ffc" href="http://www.algosmart.pl/pisac-testy-end-end-aplikacji-react-cypress/">
          <S type="underline">Jak pisać testy end-to-end...</S>
        </Link>{' '}
        - Marcin Czarkowski
      </ListItem>
      <ListItem textSize={26} margin="10px 0">
        <Link textColor="#ffc" href="https://frontendmasters.com/courses/testing-react/cypress/">
          <S type="underline">Frontend Masters: Testing React Applications</S>
        </Link>
      </ListItem>
      <ListItem textSize={26} margin="10px 0">
        <Link textColor="#ffc" href="https://testingjavascript.com/">
          <S type="underline">Testing Javascript</S>
        </Link>{' '}
        - Kent C. Dodds
      </ListItem>
    </List>
  </Slide>
)
