import React, { useState } from 'react';
import NavList from './NavList';
import navlists from './navlists';
import "./SecondaryNav.css";
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import SideMenu from './SideMenu';

function SecondaryNav() {
    return (
        <div className='secNav'>
            <div className="navs">
                { navlists.map((nav, index) => (
                    <NavList nav={nav} key={index}/>
                ))
                }
            </div>
            <div className="Menu">
                <input type='checkbox' id='check' ></input>
                <label htmlFor='check' className='checkBtn'>
                    <span className="material-symbols-outlined" >
                        menu
                    </span>
                </label>
                <div className='menu'>
                    {  
                        navlists.map((nav, index) => (
                            <SideMenu nav={nav} key={index}/>
                        ))
                    }
                </div> 
            </div>
            <div className="navs2">
                <div className="follow">follow us</div>
                <div className="fb"><BsFacebook className='social' size={23}/></div>
                <div className="tweet"><AiFillTwitterCircle className='social' size={28}/></div>
                <div className="insta"><AiFillInstagram className='social' size={28}/></div>
                <div className="linkn"><BsLinkedin className='social' size={23}/></div>
            </div>
            <div className='sideMenu'>
                {null}
            </div>
        </div>
    )
}

export default SecondaryNav