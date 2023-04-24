import React from 'react'
import NavBar from "../src/Components/NavBar/NavBar"
import SecondaryNav from "../src/Components/SecondaryNav/SecondaryNav"
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import AirPage from './Components/AirPage/AirPage'

function CoApp() {
  return (
    <>
      <NavBar/>
      <SecondaryNav/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/shop" element={<AirPage/>}/>
      </Routes>
    </>
  )
}

export default CoApp