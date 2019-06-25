// Import React

import React from 'react'
// Import Spectacle Core tags
import { Heading, Slide, Notes, CodePane, Text, Layout } from 'spectacle'
require('prismjs/components/prism-bash')

const scriptsJson = `"scripts": {
  "cy:run": "cypress run",
  "cy:open": "cypress open"
}`

export const Slide6 = (
  <Slide controlColor="primary" progressColor="primary" align="flex-start center">
    <Notes>
      <ol style={{ fontSize: '18px', lineHeight: 1.4 }}>
        <li>cy open -> uruchamia test runner w trybie interaktywnym</li>
        <li>cy run -> wykonuje wszystkie testy w trybie headless w przeglądarce Electron</li>
      </ol>
    </Notes>
    <Heading margin="30px 0 30px 0" size={6} caps lineHeight={1} textColor="primary">
      Instalacja
    </Heading>
    <CodePane lang="bash" source="yarn add --dev cypress" margin="10px auto 30px" />
    <Layout></Layout>
    <Text textAlign="left" textSize={14} textColor="primary">
      package.json:
    </Text>
    <CodePane lang="javascript" source={scriptsJson} margin="10px auto 30px" />
    <CodePane lang="javascript" source="yarn cy:open" margin="0 auto" />
  </Slide>
)
