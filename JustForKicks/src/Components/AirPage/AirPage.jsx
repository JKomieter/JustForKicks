import React from 'react'
import "./AirPage.css"
import { IoIosArrowForward } from "react-icons/io"
import ProductCategory from './ProductCategory'
import Color from './Color'
import FilterByPrice from './FilterByPrice'
import { Link } from 'react-router-dom'
import TopRated from './TopRated'
import SortResults from './SortResults'
import ProductTags from './ProductTags'


function AirPage() {
  return (
    <div className='airPage'>
        <div className="destination">
            <Link to="/" className="home" style={{textDecoration: "none", color: "#000"}}><span>Home</span></Link>
            <span className="dArrow"><IoIosArrowForward size={13}/></span>
            <span className='shop'>Shop</span>
        </div>
        <div className="mainContent">
            <div className='category'>
                <ProductCategory/>
                <Color/>
                <FilterByPrice/>
                <TopRated/>
                <ProductTags/>
            </div>
            <div className="products">
                <SortResults/>
            </div>
        </div>
    </div>
  )
}

export default AirPage;