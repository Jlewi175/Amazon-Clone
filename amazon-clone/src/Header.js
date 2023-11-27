import React from 'react'
import "./Header.css"
import logo from "./header_logo.png"
import {Link} from "react-router-dom"
import SearchIcon from "@mui/icons-material/Search"
function Header() {
  return (
    <nav className="header">   
    {/*logo on the left add amazon logo*/}
        <Link to = "/">
    <img classname = "header_logo" src ={logo} alt ="header_logo"/>
        </Link>

    {/*Search bar*/}
    <div className= "header_search">
    <input type="text" className="header_searchInput"/>
    <SearchIcon className="header_searchIcon"/>
    </div>

    {/*Three link on the right*/}
    <div className="header_nav">
        {/*1st link */}

        {/*2nd link */}

         {/*3rd link */}

    </div>
    {/*Checkout icon with number of items*/}

    </nav>
  )
}

export default Header;
