// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Slide, Notes, Image } from 'spectacle'

export const Slide5 = (
  <Slide controlColor="primary" progressColor="primary">
    <Notes>
      <ol style={{ fontSize: '18px', lineHeight: 1.4 }}>
        <li>proces node.js uruchamia przeglądarkę z proxy</li>
        <li>
          otwiera stronę html zawierającą 2 iframy -> jeden zawiera nasze testy uruchomione na localhost a drugi naszą
          aplikację
        </li>
        <li>
          Jak dostać się do rzeczy, do których dostęp ma nasza aplikacja? local storage, SW, window, normalnie 2 iframy
          nie mogą się ze sobą komunikować -> Cypress wstrzykuje skrypt, który ustawia domenę aplikacji na localhost,
          mamy dostęp do rzeczy wyżej wymienionych ponieważ testy i aplikacja są uruchomione w 1 domenie
        </li>
        <li>
          proces Node.js komunikuje się z procesem w przeglądarce za pomocą websocketów, dzięki czemu mamy dostęp do
          systemu operacyjnego (screenshoty, wideo)
        </li>
        <li>Każdy network request przechodzi przez Proxy Cypressa, Cypress kontroluje każdy request</li>
        <li>testy działają w tej samej pętli uruchomieniowej co nasza aplikacja</li>
      </ol>
    </Notes>
    <Heading margin="30px 0 30px 0" size={6} caps lineHeight={1} textColor="primary">
      Architektura
    </Heading>
    <Image src={require('./assets/cypress_architecture.png')} />
  </Slide>
)
