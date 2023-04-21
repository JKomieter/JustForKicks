import React, { Component } from 'react'
import './Tertiary.css'
import { MdOutlineLocalShipping, MdOutlineSupportAgent, MdPayment } from 'react-icons/md'
import { BsPiggyBank } from 'react-icons/bs'
import { TbDiscount2 } from 'react-icons/tb'

export default class Tertiary extends Component {
  render() {
    return (
      <div className='Tertiary'>
        <div className="tertiaryBar">
            <div className="tert">
                <div className="svg">
                    <MdOutlineLocalShipping size={30} className='support'/>
                </div>
                <div className="infoList">
                    <div className="name">FREE DELIVERY</div>
                    <div className="info">Free shipping on all order</div>
                </div>
            </div>
            <div className="tert">
                <div className="svg">
                    <MdOutlineSupportAgent size={30} className='support'/>
                </div>
                <div className="infoList">
                    <div className="name">ONLINE SUPPORT 24/7</div>
                    <div className="info">Support online 24 hours a day</div>
                </div>
            </div>
            <div className="tert">
                <div className="svg">
                    <BsPiggyBank size={30} className='support'/>
                </div>
                <div className="infoList">
                    <div className="name">MONEY RETURN</div>
                    <div className="info">Back guarantee under 7 days</div>
                </div>
            </div>
            <div className="tert">
                <div className="svg">
                    <TbDiscount2 size={30} className='support'/>
                </div>
                <div className="infoList">
                    <div className="name">MEMBER DISCOUNT</div>
                    <div className="info">Onevery order over $120.00</div>
                </div>
            </div>
            <div className="tert">
                <div className="svg">
                    <MdPayment size={30} className='support'/>
                </div>
                <div className="infoList">
                    <div className="name">SECURE PAYMENT</div>
                    <div className="info">All cards accepted</div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
