// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Slide, Image, Notes } from 'spectacle'

export const Slide12 = (
  <Slide controlColor="primary" progressColor="primary">
    <Notes>
      <ol style={{ fontSize: '16px', lineHeight: 1.4 }}>
        <li>cookiesNotice test, dodać visibility: 'hidden' do elementu, zapytać o case z debuggerem</li>
        <li>pokazać test register, reużywalne komendy, opisać wait w kontekście recaptchy</li>
      </ol>
    </Notes>
    <Heading size={4} caps lineHeight={1} textColor="primary" margin="30px 0">
      Demo
    </Heading>
    <Image src={require('./assets/scv.png')} />
  </Slide>
)
