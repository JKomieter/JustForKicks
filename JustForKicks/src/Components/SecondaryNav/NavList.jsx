import React from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import "./SecondaryNav.css"


class NavList extends React.Component {
    render() {
        return (
            <div className='navLists'>
                <div className="navName">
                    {this.props.nav.name}
                </div>
                <div className="downarrow">
                    <IoIosArrowDown size={14}/>
                </div>
                <div className="drop">
                    {null}
                </div>
            </div>
        )
    }
}

export default NavList