import React, { Component } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import "./BigImg.css"

export default class BigImg extends Component {
    state = {
        shoe: []
    }

    componentDidMount() {
        
    }

    render() {
        return (
        <div className='BigImg'>
            <div className="leftArrow">
                <IoIosArrowBack size={29} className='arrow'/>
            </div>
            <div className="rightArrow">
                <IoIosArrowForward size={29} className='arrow'/>
            </div>
        </div>
        )
    }
}

