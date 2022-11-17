import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />

            <div className="header__search">
                <input className="header__searchInput" type="text" />

            </div>


            <div className="header__nav"></div>

            <div className="header__option">
                <span
                    className="header__option1">Hello</span>
                <span
                    className="header__option2"> SignIn</span>
            </div>


            <div className='header__option'>
                <span
                    className='header__option1'>Returns</span>
                <span
                    className='header__option2'>& Orders</span>
            </div>


            <div className='header__option'>
                <span
                    className='header__option1'>Your</span>
                <span
                    className='header__option2'>Prime</span>


            
            </div>

        </div>
    );
}

export default Header
