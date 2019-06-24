// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Slide, Notes, S, List, ListItem } from 'spectacle'

export const Slide4 = (
  <Slide controlColor="primary" progressColor="primary">
    <Notes>
      <ol>
        <li>można instalować rozszerzenia dla przeglądarki, customowy config cypressa dla przeglądarki</li>
      </ol>
    </Notes>
    <Heading margin="30px 0 30px 0" size={6} caps lineHeight={1} textColor="primary">
      Cypress
    </Heading>
    <List padding="0 60px 0 0">
      <ListItem margin="10px 0" textSize={26}>
        Kompletny framework do testowania, pozwala na pisanie przy użyciu Javascript testów każdego rodzaju
      </ListItem>
      <ListItem margin="10px 0" textSize={26}>
        Wiele wbudowanych narzędzi takich jak: Mocha, Chai, Sinon, <S type="bold">jQuery</S>
      </ListItem>
      <ListItem margin="10px 0" textSize={26}>
        Skierowany do Developerów i Inżynierów Jakości oprogramowania (QA Engineer)
      </ListItem>
      <ListItem margin="10px 0" textSize={26}>
        Open Sourcowy Test Runner - aplikacja pozwalająca na uruchamianie testów w przeglądarce
      </ListItem>
      <ListItem margin="10px 0" textSize={26}>
        Działa w oparciu o przeglądarki z rodziny Chromium: Google Chrome, Chromium, Canary, Electron
      </ListItem>
      <ListItem margin="10px 0" textSize={26}>
        Komercyjny Dashboard - daje wgląd w testy uruchamiane w CI(logi, nagrywane wideo, screenshoty)
      </ListItem>
    </List>
  </Slide>
)
