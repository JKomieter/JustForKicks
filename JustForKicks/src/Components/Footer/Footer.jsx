import React from 'react'
import "./Footer.css"
import UpFooter from './UpFooter'
import DownFooter from './DownFooter'
function Footer() {
  return (
    <div className='footer'>
        <UpFooter/>
        <DownFooter/>
    </div>
  )
}

export default Footer