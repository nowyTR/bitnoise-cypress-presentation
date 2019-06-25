// Import React
import React from 'react'

// Import Spectacle Core tags
import { Deck, SlideSet } from 'spectacle'
import { Slide1 } from './slide_1.intro'
import { Slide2 } from './slide_2.typesOfTests'
import { Slide3 } from './slide_3.e2eTests'
import { Slide4 } from './slide_4.cypressOverview'
import { Slide5 } from './slide_5.architecture'
import { Slide6 } from './slide_6.setup'
import { Slide7 } from './slide_7.folder_structure'
import { Slide8 } from './slide_8.api_selectors'
import { Slide9 } from './slide_9.api_interactions'
import { Slide10 } from './slide_10.api_assertions'
import { Slide11 } from './slide_11.api_network_requests'
import { Slide12 } from './slide_12.demo'
import { Slide13 } from './slide_13.features'
import { Slide14 } from './slide_14.tradeoffs'
import { Slide15 } from './slide_15.references'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const images = {
  bg: require('./assets/cypress-header-bg.png')
}

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: 'rgb(22, 35, 50)'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <SlideSet
          style={{
            backgroundImage: `url(${images.bg})`,
            backgroundColor: 'rgb(22, 35, 50)',
            backgroundSize: 'contain',
            color: '#fff'
          }}
        >
          {Slide1}
          {Slide2}
          {Slide3}
          {Slide4}
          {Slide5}
          {Slide6}
          {Slide7}
          {Slide8}
          {Slide9}
          {Slide10}
          {Slide11}
          {Slide12}
          {Slide13}
          {Slide14}
          {Slide15}
        </SlideSet>
      </Deck>
    )
  }
}
