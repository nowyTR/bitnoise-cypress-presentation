// Import React
import React from 'react'

// Import Spectacle Core tags
import { Deck, SlideSet } from 'spectacle'
import { Slide1 } from './slide_1.intro'
import { Slide2 } from './slide_2.typesOfTests'
import { Slide3 } from './slide_3.e2eTests'
import { Slide4 } from './slide_4.cypressOverview'
import { Slide5 } from './slide_5.tradeoffs'
import { Slide6 } from './slide_6.features'
import { Slide7 } from './slide_7.architecture'
import { Slide8 } from './slide_8.references'

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
        </SlideSet>
      </Deck>
    )
  }
}
