import React from 'react'
import { BsHeadset, BsInstagram, BsLinkedin, BsRssFill } from "react-icons/bs"
import { MdOutlineFacebook } from "react-icons/md"
import { AiFillTwitterCircle } from "react-icons/ai"

function UpFooter() {
  return (
    <div className='topFooter'>
        <div className="f1 col-lg-2 col-md-6 col-sm-12">
            <div className="Htitle">Just<span className='orange'>For</span>Kicks</div>
            <div className="headSet">
                <div className="Hdset"><BsHeadset size={50} color='#F5761A'/></div>
                <div className="telePhone">+(973) 289 5317</div>
            </div>
            <div className="Htext">
                Nam liber tempor cum soluta nobis eleifend 
                option congue nihil imperdiet doming id 
                quod mazim placerat […].
            </div>
            <div className="map orange">View on map</div>
            <div className="sIcons">
                <div className="fb"><MdOutlineFacebook size={30}/></div>
                <div className="tw"><AiFillTwitterCircle size={30} color='#fff'/></div>
                <div className="ins"><BsInstagram size={30}/></div>
                <div className="lk"><BsLinkedin size={30}/></div>
                <div className="rss"><BsRssFill size={30}/></div>
            </div>
        </div>
        <div className="f2">
            f2
        </div>
        <div className="f3">
            f3
        </div>
        <div className="f4">
            f4
        </div>
        <div className="f5">
            f5
        </div>
    </div>
  )
}

export default UpFooter;