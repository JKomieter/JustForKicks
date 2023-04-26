import React from 'react'
import "./Featured.css"

function Featured() {
  return (
    <div className='featured'>
        <div className="topF">
            <div className="line"><hr/></div>
            <div className="topText">Week Featured Products</div>
            <div className="line"><hr/></div>
        </div>
        <div className="words">
            Typi non habent claritatem insitam est usus legentis in qui facit eorum claritatem, investigationes demonstraverunt lectores legere me lius quod legunt saepius.
        </div>
    </div>
  )
}

export default Featured