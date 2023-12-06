import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import { useStateValue } from './StateProvider'


function Header() {

const [{cart}] = useStateValue();

console.log(cart);

  return (
    <nav className="header">   
    {/*logo on the left add amazon logo*/}
        <Link to = "/">
    <img classname = "header_logo" src ="https://www.amazon.com/ref=nav_logo" alt ="header_logo"/>
        </Link>

    {/*Search bar*/}
    <div className= "header_search">
    <input type="text" className="header_searchInput"/>
    <SearchIcon className="header_searchIcon"/>
    </div>

    {/*Three link on the right*/}
    <div className="header_nav">
        {/*1st link */}
            <Link to = "/login" className="header_link">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>
            </Link>
\
        {/*2nd link */}
            <Link to= "/" className="header_link">
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
            </Link>

         {/*3rd link */}
            <Link to = "/" className="header_link">
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
            </Link>

    </div>

    {/*Checkout icon with number of items*/}
    <Link to = "/checkout" className="header_link">
        <div className="header_optionBasket">
            {/*Checkout Basket */}
            <ShoppingBasketIcon/>
            {/*Number of items */}
            <span className="header_basketCount" >{cart?.length}</span>
        </div>
    </Link>
    </nav>
  );
}

export default Header;
