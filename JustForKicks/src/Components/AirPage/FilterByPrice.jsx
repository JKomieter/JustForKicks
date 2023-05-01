import React, { useState } from 'react'
import Slider from "@mui/material/Slider";
import { Button } from '@mui/material';

function FilterByPrice() {
    const [range, setRange] = useState([40, 70]);


    function handleChanges(event, newValue) {
        setRange(newValue);
    }

    return (
        <div className='filter'>
            <div className="title">
                filter by price
            </div>
            <div className="slider">
                <Slider value={range} onChange={handleChanges} valueLabelDisplay="auto"/>
            </div>
            <div className='filterBtn'>
                {/* will add a routes for changing the query results */}
                <Button variant="contained" color="success" className='filBtn'>
                    <b>Filter</b>
                </Button>
            </div>
            <div className="range">
                <span className='price'>Price:</span> <span className='priceRange'>$0 - $100</span>
            </div>
        </div>
    )
}

export default FilterByPrice