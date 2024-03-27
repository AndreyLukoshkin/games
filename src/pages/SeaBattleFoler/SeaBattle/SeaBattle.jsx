import React from 'react';

import Field from '../Fields/Field';
import Ships from '../Ships/Ships';
import './styles.css';

const SeaBattle = () => {
    return (
        <div className="seabattle__container">
            <Ships />
            <Field />
        </div>
    );
};

export default SeaBattle;
