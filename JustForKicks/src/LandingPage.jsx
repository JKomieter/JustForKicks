import React from 'react'
import BigImg from './Components/BigImg/BigImg'
import Tertiary from './Components/Tertiary/Tertiary.jsx'
import Xclusive from './Components/Xclusive/Xclusive'
import Offer from './Components/Offer/Offer'
import Arrivals from './Components/Arrivals/Arrivals'
import SportsWearHero from './Components/SportsWearHero/SportsWearHero'
import Featured from './Components/Featured/Featured'


function LandingPage() {
  return (
    <>
      <BigImg/>
      <Tertiary/>
      <Xclusive/>
      <Offer/>
      <Arrivals/>
      {/* will add a component here */}
      <SportsWearHero/>
      <Featured/>
    </>
  )
}

export default LandingPage