import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="header_identity">
                <img src="/images/ptLogo.png" alt="logo"  style={{width:'40px' , marginRight: '10px'  , backgroundColor:'#fff'}}/>
                <h2>Project Topi</h2>
            </div>
            <div className="header__menu">
                <Link to="/" className="header__login">LOGIN</Link>
                <Link to="/signup" className="header__register">SIGN UP</Link>
            </div>
        </div>
    )
}

export default Header
