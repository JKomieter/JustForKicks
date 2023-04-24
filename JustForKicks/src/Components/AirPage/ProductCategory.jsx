import React from 'react'
import category from "./category.js"
import CatList from './CatList.jsx'

function ProductCategory() {
  return (
    <div className='prodCart'>
        <div className="title">
            Product Categories
        </div>
        <div className="categoryDetails">
            {
                category.map((cat, index) => (
                    <CatList cat={cat} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default ProductCategory