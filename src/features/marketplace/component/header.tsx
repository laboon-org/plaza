import React from 'react';
import Logo from '../../../image/logo.png';

export const Header = () => {
    return (
        <div className="headerForm">
            <img  src={Logo} alt="" className='logo' />
            <h1 className='headerTxt'>Plaza (Marketplace)</h1>
        </div>
    )
}