import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';

const Navbar = ({
    setBurgerClassActive,
    burgerClassActive,
    setIsBurgerOpen,
    isBurgerOpen,
    openBurger,
}) => {
    const navigate = useNavigate();
    const body = document.querySelector('body');

    const closeBurgerWhenNavigate = (link) => {
        navigate(link);
        setIsBurgerOpen(!isBurgerOpen);
        isBurgerOpen
            ? setBurgerClassActive('active')
            : setBurgerClassActive('');
        body.classList.toggle('lock');
    };

    return (
        <nav className={`header__menu ${burgerClassActive}`}>
            <ul className="header__list">
                <li>
                    <div
                        onClick={() => closeBurgerWhenNavigate('/games')}
                        className="header__link"
                    >
                        Games
                    </div>
                </li>
                {/* <li>
                    <div
                        onClick={() => navigate('/matched')}
                        className="header__link"
                    >
                        Matched
                    </div>
                </li> */}
                <li>
                    <div
                        onClick={() => closeBurgerWhenNavigate('/about')}
                        className="header__link"
                    >
                        About
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
