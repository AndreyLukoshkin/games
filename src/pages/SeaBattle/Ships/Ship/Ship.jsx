import React, { useState } from 'react';

import './styles.css';

const Ship = ({ id, ship }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = (e) => {
        e.dataTransfer.setData('shipId', id);
        setIsDragging(true);
    };

    const handleDrag = (e) => {
        // Дополнительная логика при перетаскивании, если необходимо
    };

    const handleDragEnd = (e) => {
        setIsDragging(false);
        // Логика для размещения корабля на поле по окончании перетаскивания
    };

    return (
        <div
            draggable
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            className="seabattle__container_ship"

            // style={{
            //     width: '50px',
            //     height: '50px',
            //     backgroundColor: 'blue',
            //     opacity: isDragging ? 0.5 : 1,
            // }}
        >
            {/* Ваша разметка корабля */}
            <div
                className={
                    ship === 'four'
                        ? 'seabattle__container_ship_four'
                        : ship === 'three'
                        ? 'seabattle__container_ship_three'
                        : ship === 'two'
                        ? 'seabattle__container_ship_two'
                        : ship === 'one'
                        ? 'seabattle__container_ship_one'
                        : ''
                }
            ></div>
        </div>
    );
};

export default Ship;
