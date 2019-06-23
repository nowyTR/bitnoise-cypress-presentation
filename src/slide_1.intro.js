// Import React
import React from 'react'

// Import Spectacle Core tags
import { Heading, Slide, Text, Image } from 'spectacle'
export const Slide1 = (
  <Slide
    transition={['zoom']}
    bgColor="quaternary"
    bgImage="https://www.cypress.io/static/bca66aaf4653151a7b05fee768a65b8d/05a79/cypress-header-bg.png"
    bgSize="contain"
  >
    <Heading size={4} caps lineHeight={1} textColor="primary">
      Testy e2e z użyciem{' '}
    </Heading>
    <Image src="https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/77608/cypress-bw.png" />
    <Text margin="65px 0 0" textColor="primary" size={6}>
      Dominik Nowik
    </Text>
  </Slide>
)
