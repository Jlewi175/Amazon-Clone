import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className="home">
      <img className="home_image" src = "https://m.media-amazon.com/images/I/71hiXfDAKkL._SX3000_.jpg" alt="home_image"/>
    
    <div className="home_row">
    <Product id = "122" title = "hat" price = {20.99} rating= {5} image = "https://m.media-amazon.com/images/I/41cO0GJ53LL._AC_UF452,452_FMjpg_.jpg"/>
    <Product id = "122" title = "hat" price = {20.99} rating= {5} image = "https://m.media-amazon.com/images/I/41cO0GJ53LL._AC_UF452,452_FMjpg_.jpg"/>
    </div>

    <div className="home_row">
    <Product id = "122" title = {"hat"} price = {20.99} rating= {5} image = "https://m.media-amazon.com/images/I/41cO0GJ53LL._AC_UF452,452_FMjpg_.jpg"/>
    <Product id = "122" title = "hat" price = {20.99} rating= {5} image = "https://m.media-amazon.com/images/I/41cO0GJ53LL._AC_UF452,452_FMjpg_.jpg"/>
    <Product id = "122" title = "hat" price = {20.99} rating= {5} image = "https://m.media-amazon.com/images/I/41cO0GJ53LL._AC_UF452,452_FMjpg_.jpg"/>

    </div>

    <div className="home_row">
    <Product id = "122" title = "hat" price = {20.99} rating= {5} image = "https://m.media-amazon.com/images/I/41cO0GJ53LL._AC_UF452,452_FMjpg_.jpg"/>
    </div>

    </div>
  );
}

export default Home;
