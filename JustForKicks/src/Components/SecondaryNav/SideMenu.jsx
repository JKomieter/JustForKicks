import React from 'react'

function SideMenu({nav}) {
  return (
    //will add routes to each menu item
    <div className='sideNav'>
        {nav.name}
    </div>
  )
}

export default SideMenu