import React from "react";
import "./NavBar.css";
import { RxPerson } from "react-icons/rx"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
// import { getShoeBrand } from "../../../client/Client";
import SearchList from "../SearchList/SearchList";


class NavBar extends React.Component {
    state = {
        searchValue: '',
        searchList: null
    }

    handleType = (e) => {
        const value = e.target.value;
        this.setState({searchValue: value});
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '683a22922bmshf5a626e69c1fcc0p10b894jsn82aaf1320a66',
                'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'
            }
        };

         fetch(`https://the-sneaker-database.p.rapidapi.com/search?limit=10&query=${value}`, options)
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            this.setState({searchList: response})
        })
        .catch(err => console.error(err));
    }

    closeResults = (e) => {
        e.preventDefault();
        this.setState({searchValue: ''})
    }

    render() {
        console.log(this.state.searchValue)
        return (
            <>
            <div className="navBar" id="nav">
                <div className="logo">Just<span className="orange">For</span>Kicks<span className="orange">.</span></div>
                <div className="searchBar">
                    <div className="dropDown">All Categories</div>
                    <div className="inputBar">
                        <input type="text" className="textBar" onChange={this.handleType} value={this.state.searchValue}/>
                    </div>
                    <div className="search">Search</div>
                </div>
                <div className="accountDetails">
                    <div className="personSign"><RxPerson size={30}/></div>
                    <div className="account">
                        Register or Sign in
                    </div>
                    <div className="heartIcon">
                        <AiOutlineHeart size={30}/>
                    </div>
                    <div className="cartIcon">
                        <AiOutlineShoppingCart size={30}/><span className="cartNumber">3</span>
                    </div>
                    <div className="myCart">
                        <div className="myCartText">My Cart</div>
                        <div className="myPriceTotal">$0.00</div>
                    </div>
                </div>
            </div>
            {
                this.state.searchValue ? 
                (<div className="searchList">
                        <SearchList shoes={this.state.searchList} closeResults={this.closeResults}/>
                </div>) : null
            }
            </>
        )
    }
}

export default NavBar;