import React from 'react';

import './styles.css';

const Mines = () => {
    return (
        <div className="mines__container">
            <div className="mines__container_field">
                {Array(10 * 10)
                    .fill()
                    .map((el, index) => (
                        <div
                            className="mines__container_field_cell"
                            key={index}
                        >
                            {index}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Mines;
