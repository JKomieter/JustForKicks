import React from 'react'

import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'

function CoApp() {
  return (
    <>
      <NavBar/>
      <SecondaryNav/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        {/* add a routes for Products Page */}
      </Routes>
    </>
  )
}

export default CoApp