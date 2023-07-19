import React from 'react';

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
});

const Header = () => {
    return (
        <div class="header__wrapper">
            <header class="header">
                <div class="header__container">
                    <div class="header__logo">
                        <div class="header__logo_container">
                            <p class="header__logo_title">Games</p>
                        </div>
                    </div>

                    <div class="header__menu">
                        <div class="header__container_list">
                            <ul class="header__list">
                                <li class="header__link">
                                    <a href="#">Any1</a>
                                </li>
                                <li class="header__link">
                                    <a href="#">Any2</a>
                                </li>
                                <li class="header__link">
                                    <a href="#">Any2</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
