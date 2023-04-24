import React from 'react'
import "./AirPage.css"
import { IoIosArrowForward } from "react-icons/io"
import ProductCategory from './ProductCategory'

function AirPage() {
  return (
    <div className='airPage'>
        <div className="destination">
            <span className="home">Home</span>
            <span className="dArrow"><IoIosArrowForward size={13}/></span>
            <span className='shop'>Shop</span>
        </div>
        <div className="mainContent">
            <div className='category'>
                <ProductCategory/>
            </div>
            <div className="products">
                products
            </div>
        </div>
    </div>
  )
}

export default AirPage;