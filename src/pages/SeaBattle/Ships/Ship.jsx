import React, { useState } from 'react';

import './styles.css';

const Ship = ({ id }) => {
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
            // style={{
            //     width: '50px',
            //     height: '50px',
            //     backgroundColor: 'blue',
            //     opacity: isDragging ? 0.5 : 1,
            // }}
        >
            {/* Ваша разметка корабля */}
        </div>
    );
};

export default Ship;
