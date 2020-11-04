import React from 'react'
import NavigationBar from './NavigationBar/NavigationBar'

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  )
}

export default Layout
