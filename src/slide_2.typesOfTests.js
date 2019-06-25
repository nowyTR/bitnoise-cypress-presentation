// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Slide, List, ListItem, Image, Layout, Fill, Appear, Notes } from 'spectacle'

export const Slide2 = (
  <Slide controlColor="primary" progressColor="primary">
    <Notes>
      <ol style={{ fontSize: '18px', lineHeight: 1.4 }}>
        <li>Analiza statyczna - eliminujemy błędy runtime, proste bugi</li>
        <li>Testy jednostkowe - sprawdzamy w izolacji pojedyncze funkcje</li>
        <li>Testy integracyjne: - sprawdzamy część aplikacji, łączymy ze sobą komponenty</li>
        <li>
          Testy e2e - odpalamy całą aplikację - frontend i backend, test imituje zachowanie i interakcje usera,
          Zapewniają pewność że aplikacja działa po stronie użytkownika
        </li>
        <li>
          W miarę przechodzenia do góry trofeum testy stają się coraz bardziej kosztowne (czas w procesie CI:
          uruchamiane jest coraz więcej kodu, czas na napisanie/utrzymanie: występuje coraz więcej punktów w których
          test może się wywalić - musimy poświęcić czas na jego analizę i naprawę)
        </li>
        <li>
          teoretycznie powinniśmy pisać tylko testy jednostkowe -> najlepszy tradeoff ale prawda jest taka że im
          bardziej testy oddają sposób w jaki aplikacja jest używana tym lepiej i daje to nam więcej pewności - im wyżej
          w trofeum tym więcej pewności
        </li>
        <li>
          przykład pisania testów dla formularza -> testy e2e cały proces logowania, testy integracyjne pojedynczego
          formularza, testy jednostkowe generatora/walidatora, statyczna analiza wywołanie funkcji ze złym typem
          parametru
        </li>
        <li>wspomnieć o visual regression testing</li>
      </ol>
    </Notes>
    <Heading margin="30px 0 30px 0" size={6} caps lineHeight={1} textColor="primary">
      Rodzaje testów
    </Heading>
    <Layout>
      <Fill>
        <List padding="0 60px 0 0">
          <Appear order={4}>
            <ListItem margin="50px 0 70px" textSize={24}>
              Testy End to End
            </ListItem>
          </Appear>
          <Appear order={3}>
            <ListItem margin="10px 0 120px" textSize={24}>
              Testy integracyjne
            </ListItem>
          </Appear>
          <Appear order={2}>
            <ListItem margin="10px 0 40px" textSize={24}>
              Testy jednostkowe
            </ListItem>
          </Appear>
          <Appear order={1}>
            <ListItem margin="10px 0" textSize={24}>
              Analiza statyczna (eslint, prettier, Flow/Typescript)
            </ListItem>
          </Appear>
        </List>
      </Fill>
      <Fill
        style={{
          backgroundColor: '#fff',
          padding: '0 30px',
          borderRadius: '15px'
        }}
      >
        <Image
          bgColor="#fff"
          src="https://testingjavascript.com/static/trophyWithLabels@2x-3c2b593913ddfea970b801e67648092d.png"
        />
      </Fill>
    </Layout>
  </Slide>
)
