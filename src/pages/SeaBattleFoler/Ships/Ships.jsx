import React from 'react';

import { shipsObjects } from '../../../constants';
import Ship from '../Ship/Ship';
import './styles.css';

const Ships = () => {
    return (
        <div className="seabattle__container_ships">
            {shipsObjects.map((ship) => {
                return (
                    <Ship
                        id={ship.id}
                        type={ship.type}
                        size={ship.size}
                        key={ship.id}
                    />
                );
            })}
        </div>
    );
};

export default Ships;
