import React from 'react'
import tags from "./tags"

function ProductTags() {
  return (
    <div className='prodTags'>
        <div className="title">Product Tags</div>
        <div className="tags">
          {
            tags.map((tag, index) => (
              <div className='tag' key={index}>{tag}</div>
            ))
          }
        </div>
    </div>
  )
}

export default ProductTags