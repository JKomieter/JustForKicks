import React, { Component } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import "./BigImg.css"

export default class BigImg extends Component {
    state = {
        shoe: [],
        num: 0,
        images: [
            'https://www.sneakerhdwallpapers.com/wallpapers/2019/air-jordan-6-travis-scott-wallpaper-retina.jpg',
            'https://wallpapercave.com/wp/wp4571631.jpg',
            'https://th.bing.com/th/id/R.e652fd8885d7e5d2761f94363344b138?rik=ewSysGvc%2f16%2bWg&pid=ImgRaw&r=0'
        ]
    }

    handleHero = (e) => {
        e.preventDefault();
        //change backgroundImage as long as num does not exceed images.length
        if (this.state.num < this.state.images.length - 1) {
            this.setState({num: ++this.state.num})
        } else {
            this.setState({num: 0})
        }

    }

    render() {
        return (
        <div className='BigImg' style={{backgroundImage: `url(${this.state.images[this.state.num]})`}}>
            <div className="leftArrow">
                <IoIosArrowBack role="arrow" data-testid="Arrow" size={29} id="arr1" className='arrow' onClick={this.handleHero}/>
            </div>
            <div className="rightArrow">
                <IoIosArrowForward size={29} id="arr2" className='arrow' onClick={this.handleHero}/>
            </div>
        </div>
        )
    }
}

