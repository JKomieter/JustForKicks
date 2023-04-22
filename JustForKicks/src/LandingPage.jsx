import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import SecondaryNav from './Components/SecondaryNav/SecondaryNav'
import BigImg from './Components/BigImg/BigImg'
import Tertiary from './Components/Tertiary/Tertiary.jsx'
import Xclusive from './Components/Xclusive/Xclusive'
import Offer from './Components/Offer/Offer'
import Arrivals from './Components/Arrivals/Arrivals'


function LandingPage() {
  return (
    <>
      <BigImg/>
      <Tertiary/>
      <Xclusive/>
      <Offer/>
      <Arrivals/>
    </>
  )
}

export default LandingPage