import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io"

function SortResults() {
    const [sort, setSort] = useState("Default Sorting")

    const handleChangeSort = (e) => {
        const value = e.target.value;
        setSort(value)
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
                    <div className="sortArrow"><IoMdArrowDropdown/></div>
                </div>
            </div>
        </div>
    )
}

export default SortResults