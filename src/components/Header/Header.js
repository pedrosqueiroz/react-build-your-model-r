import React from 'react';

import './Header.scss';

import logo from '../../assets/img/svg/RV-logo.svg'

export default function Header() {
  return (
    <div className="header">
        <div className="header__logo">
            <a href="https://www.redventures.com/" target="_blank" rel="noopener noreferrer"><img src={logo} alt=""/></a>
        </div>
        <div className="header__menu">
            <div className="header__menu__item --active">Model R</div>
            <div className="header__menu__item">Model IQ</div>
            <div className="header__menu__item">Model Mobi</div>
            <div className="header__menu__item">Model Charlie</div>
            <div className="header__menu__item">Model Italy</div>
        </div>
    </div>
  );
}
