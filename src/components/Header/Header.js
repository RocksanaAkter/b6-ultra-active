import React from 'react';
import final from '../../images/final.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <img className='logoPic' src={final} alt="" />
            </nav>
            <h2 className='headerText'>ProgProblem Solving Club</h2>
        </div>
    );
};

export default Header;