// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Slide, Notes, Appear, List, ListItem } from 'spectacle'

export const Slide3 = (
  <Slide transition={['zoom']} bgColor="primary">
    <Notes>
      <ol>
        <li>na koniec: mały wybór narzędzi, Selenium stworzone 15 lat temu</li>
      </ol>
    </Notes>
    <Heading margin="30px 0 30px 0" size={4} caps lineHeight={1} textColor="quaternary">
      Testy End to End
    </Heading>
    <List padding="0 60px 0 0">
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Automatyzujemy zachowania użytkownika na podstawie scenariuszy testowych
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Sprawdzamy aplikację 'od zewnątrz' -> na poziomie interfejsu użytkownika
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Czas wykonywania może być długi ze względu na złożoność scenariuszy
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Piszemy zazwyczaj minimalną ilość testów tylko dla krytycznych miejsc aplikacji
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26} textColor="red">
          Wynik testu nie zawsze jest powtarzalny, szczególnie jeśli test jest długi i obejmuje kilka scenariuszy.
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26} textColor="red">
          Uzyskujemy informację która funkcjonalność nie działa, sami musimy znaleźć fragment kodu
        </ListItem>
      </Appear>
    </List>
  </Slide>
)
