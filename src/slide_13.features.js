// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Slide, Notes, Appear, List, ListItem } from 'spectacle'

export const Slide13 = (
  <Slide controlColor="primary" progressColor="primary">
    <Notes>
      <ol>
        <li>snapshoty -> poszczególne kroki są zapisywane, widzimy dokładnie co zdarzyło się na danym kroku [DEMO]</li>
        <li>
          debugowanie -> Cypress działa w tej samej pętli wykonania (run loop) co aplikacja, mamy bezpośredni dostęp do
          kodu wykonywanego na stronie i wszystkich api przeglądarki (window, document, debugger) [DEMO -> debugger,
          funkcja .debug()]
        </li>
        <li>
          powtarzalne wyniki testów -> cypress jeżeli nie znajduje elementu DOM nie zwraca pustej kolekcji jak jQuery,
          auto-retry aż nie znajdzie elementu albo minie timeout, callback then [DEMO]
        </li>
        <li>stub, spy, clock https://docs.cypress.io/guides/guides/stubs-spies-and-clocks.html#Capabilities</li>
      </ol>
    </Notes>
    <Heading margin="30px 0 30px 0" size={6} caps lineHeight={1} textColor="primary">
      Zalety
    </Heading>
    <List padding="0 60px 0 0">
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Snapshoty
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Łatwe debugowanie
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Przewidywalne i powtarzalne wyniki testów
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Zarządzanie ruchem sieciowym
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Screenshoty i wideo
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Dobra dokumentacja
        </ListItem>
      </Appear>
    </List>
  </Slide>
)
