import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import "./Arrivals.css"

function TopArrivals() {
  return (
    <div className='topArrivals'>
        <div className="arrOne arr">
            New Arrivals
        </div>
        <div className="arrTwo arr">
            BestSeller
        </div>
        <div className="arrThree arr">
            Featured Products
        </div>
        <div className="arrFive arr">
            <div className="leftArr">
                <MdKeyboardArrowLeft size={40}/>
            </div>
            <div className="rightArr">
                <MdKeyboardArrowRight size={40}/>
            </div>
        </div>
    </div>
  )
}

export default TopArrivals