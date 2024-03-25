import React from 'react';

import Ship from './Ships/Ship';
import './styles.css';

const SeaBattle = () => {
    return (
        <div className="seabattle__container">
            <div className="seabattle__container_ships">
                <Ship className="seabattle__container_ship_four" />
                <Ship className="seabattle__container_ship_three" />
                <Ship className="seabattle__container_ship_three" />
                <Ship className="seabattle__container_ship_two" />
                <Ship className="seabattle__container_ship_two" />
                <Ship className="seabattle__container_ship_two" />
                <Ship className="seabattle__container_ship_one" />
                <Ship className="seabattle__container_ship_one" />
                <Ship className="seabattle__container_ship_one" />
                <Ship className="seabattle__container_ship_one" />
            </div>
            <div className="seabattle__wrapper">
                <div className="seabattle__wrapper_left_field">
                    {Array(10 * 10)
                        .fill()
                        .map((el, index) => (
                            <div
                                className="seabattle__wrapper_cell"
                                key={index}
                            >
                                {index}
                            </div>
                        ))}
                </div>
                <div className="seabattle__wrapper_right_field">
                    {Array(10 * 10)
                        .fill()
                        .map((el, index) => (
                            <div
                                className="seabattle__wrapper_cell"
                                key={index}
                            >
                                {index}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default SeaBattle;
