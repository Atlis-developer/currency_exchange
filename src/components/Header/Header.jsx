import React from 'react';
import './Header.sass';
import Logo from '../../images/logo.png'


export const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="Logo" />
            <span>
                Currency Exchange
            </span>
        </div>
    );
}
