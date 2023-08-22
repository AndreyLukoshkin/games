import React from 'react';

import './styles.css';

const Navbar = ({ burgerClassActive }) => {
    return (
        <nav className={`header__menu ${burgerClassActive}`}>
            <ul className="header__list">
                <li>
                    <div className="header__link">Games</div>
                </li>
                <li>
                    <div className="header__link">Matched</div>
                </li>
                <li>
                    <div className="header__link">About</div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
