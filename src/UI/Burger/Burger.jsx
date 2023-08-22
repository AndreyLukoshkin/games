import React from 'react';

import './styles.css';

const Burger = ({ openBurger, burgerClassActive }) => {
    return (
        <div
            onClick={openBurger}
            className={`header__burger ${burgerClassActive}`}
        >
            <span></span>
        </div>
    );
};

export default Burger;
