import React, { useState } from 'react';

import Burger from '../../UI/Burger/Burger';
import Logo from '../../UI/Logo/Logo';
import Navbar from '../../UI/Navbar/Navbar';
import './styles.css';

const Header = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(true);
    const [burgerClassActive, setBurgerClassActive] = useState('');
    const body = document.querySelector('body');

    const openBurger = () => {
        setIsBurgerOpen((isBurgerOpen) => !isBurgerOpen);
        isBurgerOpen
            ? setBurgerClassActive('active')
            : setBurgerClassActive('');
        body.classList.toggle('lock');
    };

    return (
        <div className="header__wrapper">
            <header className="header">
                <div className="header__container">
                    <div className="header__body">
                        <Logo />
                        <Burger
                            openBurger={openBurger}
                            burgerClassActive={burgerClassActive}
                        />
                        <Navbar burgerClassActive={burgerClassActive} />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
