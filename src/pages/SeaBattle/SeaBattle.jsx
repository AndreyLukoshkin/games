import React from 'react';

import './styles.css';

const SeaBattle = () => {
    return (
        <div className="seabattle__container">
            <div className="seabattle__container_ships"></div>
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
