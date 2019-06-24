// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Slide, Notes, Appear, List, ListItem } from 'spectacle'

export const Slide5 = (
  <Slide controlColor="primary" progressColor="primary">
    <Notes>
      <ol>
        <li>nigdy nie będzie wsparcia dla tabów, nie jest potrzebne -> anchor zawsze otworzy taba</li>
        <li>eventy mobilne są w planie</li>
        <li>adaptery dla innych języków backendowych są w planie</li>
        <li>hover, iframe, file download/upload</li>
        <li>wspardcie dla przeglądarek -> trwają prace, firefox jest blisko</li>
      </ol>
    </Notes>
    <Heading margin="30px 0 30px 0" size={6} caps lineHeight={1} textColor="primary">
      Wady
    </Heading>
    <List padding="0 60px 0 0">
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Brak wsparcia dla otwierania kilku tabów
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Nie ma wsparcia dla SEO - indeksowanie i web crawlery
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Nie ma możliwości testowania wydajności
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Skrypty embeddowane na innych stronach (3rd party)
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26}>
          Jeden test -> jedna superdomena
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26} textColor="green">
          Brak wsparcia dla eventów natywnych/mobilnych
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26} textColor="green">
          Brak wsparcia dla innych przeglądarek
        </ListItem>
      </Appear>
      <Appear>
        <ListItem margin="10px 0" textSize={26} textColor="green">
          Testy są odpalane w przeglądarce -> supportowany jest tylko Javascript, komunikacja z backendem jest
          utrudniona
        </ListItem>
      </Appear>
    </List>
  </Slide>
)
