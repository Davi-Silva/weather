import React from 'react'
import Link from 'next/link'
import { Navbar, Container, Brand, WhatIs } from '../../../styles/components/UI/NavigationBar/NavigationBar'

const NavigationBar = () => {
  return (
    <Navbar>
      <Container>
        <div>
          <Brand>Weather</Brand>
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
