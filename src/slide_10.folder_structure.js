// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Slide, Notes, Image } from 'spectacle'

export const Slide10 = (
  <Slide controlColor="primary" progressColor="primary" align="flex-start center">
    <Notes>
      <ol>
        <li>
          fixtures - zewnętrzne dane, które mogą używać nasze testy, przeważnie jsony do stubowania network requestów,
          obrazki, odpowiednik __mocks__ znanego nam z Jest
        </li>
        <li>
          integration - folder, w którym dodajemy testy, nazewnictow .spec, podział na podfoldery, zmiana nazwy na e2e,
          folder examples dużo przykłądów i komentarzy
        </li>
        <li>
          plugins -> zmiana wewnętrznych procesów cypressa, mamy tu dostęp do procesu node, można pisać kod który
          uruchamiany jest w poszczególnych etapach działania cypressa, można dodawać zmienne środowiskowe, transpilację
          kodu (np. dodać typescript support), dodać argumenty uruchomieniowe dla przeglądarki, użyć node-a do operacji
          na bazie danych
        </li>
        <li>
          support - plik uruchamiany przed każdym testem, idealny do dodania reużywalnych części kodu, np. kustomowych
          komend, zmiennych globalnych, przypomina trochę setupTests.js z Jest
        </li>
      </ol>
    </Notes>
    <Heading margin="30px 0 30px 0" size={6} caps lineHeight={1} textColor="primary">
      Struktura folderów
    </Heading>
    <Image src={require('./assets/cypress_folders2.png')} />
  </Slide>
)
