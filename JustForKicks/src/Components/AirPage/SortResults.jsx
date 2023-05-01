import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io"


function SortResults() {
    const [sort, setSort] = useState("Default Sorting")
    const [display, setDisplay] = useState('none')

    const handleChangeSort = (e) => {
        setDisplay('flex')
    }

    const handleSort = (value) => {
        console.log(value)
        setSort(value)
        setDisplay("none")
    }

    return (
        <div className='sortResults'>
            <div className="leftShow">
                Showing 1 - 16 of 53 results
            </div>
            <div className="rightShow">
                <div className='sortBy'>Sort By:</div>
                <div className='sortForm'>
                    <div className="selectSort">
                        {sort}
                    </div>
                    <div className="sortArrow" onClick={handleChangeSort}><IoMdArrowDropdown/></div>
                    <div className='sortMenu' style={{display: display}}>
                        <div className="sort" onClick={() => handleSort("sort by popularity")}>sort by popularity</div>
                        <div className="sort" onClick={() => handleSort("sort by average rating")}>sort by average rating</div>
                        <div className="sort" onClick={() => handleSort("sort by latest")}>sort by latest</div>
                        <div className="sort" onClick={() => handleSort("sort by price: low to high")}>sort by price: low to high</div>
                        <div className="sort" onClick={() => handleSort("sort by price: high to low")}>sort by price: high to low</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SortResults