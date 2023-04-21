import React from 'react'
import TopArrivals from './TopArrivals'
import './Arrivals.css'
import DownArrivals from './DownArrivals'

function Arrivals() {
        return (
            <div className='arrivals'>
                <TopArrivals/>
                <DownArrivals/>
            </div>
        )
}

export default Arrivals;