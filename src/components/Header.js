import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';

function Header() {

  const[{basket,user}]=useStateValue();
  const login=()=>{
    if(user){
      auth.signOut();
    }
  }
  const loggedUser=JSON.parse(localStorage.getItem("loginDetails"));
  return (
    <nav className='header'>
        {/* Logo */}
        <Link to="/">
        <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
        </Link>
        {/* Search Bar */}
        <div className='header_search'>
        <input type="text"  className="header_searchInput" placeholder='Search'/>
         <SearchIcon className='header_searchIcon'/>
         </div>
        {/* 3 Links */}
        <div className='headerNav'>
            {/* 1st Link */}
            <Link to={!user&&'/login'} className='header_link'>
            <div onClick={login} className='header_options'>
            <span className="header__optionLineOne">Hello {loggedUser?(loggedUser.name):user}</span>
            <span className="header__optionLineTwo">{loggedUser? 'Sign In':"Sign Out"}</span>
            </div>
            </Link>
            {/* 2nd Link */}
            <Link to='/' className='header_link'>
            <div className='header_options'>
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
            </div>
            </Link>
            {/* 3rd Link */}
            <Link to='/' className='header_link'>
            <div className='header_options'>
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
            </div>
            </Link>
            {/* 4th Link */}
            <Link to="/checkout" className='header_link'>
            <div className="header__optionBasket">
            <ShoppingBasketIcon/>
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
            </Link>

        </div>
    </nav>
  )
}

export default Header