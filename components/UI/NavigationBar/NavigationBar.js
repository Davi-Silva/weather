import React from 'react'
import Link from 'next/link'
import { Navbar, Container, WhatIs } from '../../../styles/components/UI/NavigationBar/NavigationBar'

const NavigationBar = () => {
  return (
    <Navbar>
      <Container>
        <div>
          <h4>Weather</h4>
        </div>
        <div>
          <Link href='/about' as='/about'>
            <WhatIs>What is Wheather?</WhatIs>
          </Link>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
