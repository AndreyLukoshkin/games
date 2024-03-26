import React from 'react';

import './styles.css';

const Field = () => {
    return (
        <div className="seabattle__fields">
            <div className="seabattle__field_left">
                {Array(10 * 10)
                    .fill()
                    .map((el, index) => (
                        <div className="seabattle__field_cell" key={index}>
                            {index}
                        </div>
                    ))}
            </div>
            <div className="seabattle__field_right">
                {Array(10 * 10)
                    .fill()
                    .map((el, index) => (
                        <div className="seabattle__field_cell" key={index}>
                            {index}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Field;
