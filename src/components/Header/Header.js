import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <img className='logoPic' src={logo} alt="" />
            </nav>
            <h2 className='headerText'>ProgProblem Solving Club</h2>
        </div>
    );
};

export default Header;