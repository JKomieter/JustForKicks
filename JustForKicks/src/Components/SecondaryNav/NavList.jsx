import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import "./SecondaryNav.css"
import ContentList from '../SearchList/ContentList';


class NavList extends React.Component {
    state = {
        showContent: false,
        display: 'none',
        arrowUp: true
    }

    handleShowContent = (e) => {
        //show list when hovered upon
        e.preventDefault();
        this.setState({
            showContent: true,
            display: 'block',
            arrowUp: false
        })
    }

    handleUnshow = (e) => {
        //unshow list when mouse leaves
        e.preventDefault();
        this.setState({
            showContent: false,
            display: 'none',
            arrowUp: true
        })
    }

    render() {
        return (
            <div className='navLists' id={this.props.nav.name} onMouseEnter={this.handleShowContent} onClick={this.handleUnshow}>
                <div className="navName">
                    {this.props.nav.name}
                </div>
                <div className="downarrow">
                    { this.state.arrowUp ?
                        (<IoIosArrowDown size={14}/>) : (<IoIosArrowUp size={14}/>)
                    }
                </div>
                <div className="drop" style={{display: this.state.display}}>
                    {
                        this.state.showContent ?
                        this.props.nav.content.map((con) => (
                            <ContentList con={con}/>
                        )) : (null)
                    }
                </div>
            </div>
        )
    }
}

export default NavList