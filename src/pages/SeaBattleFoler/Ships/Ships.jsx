import React from 'react';

import Ship from '../Ship/Ship';
import './styles.css';

const Ships = () => {
    return (
        <div className="seabattle__container_ships">
            <Ship ship={'four'} />
            <Ship ship={'three'} />
            <Ship ship={'three'} />
            <Ship ship={'two'} />
            <Ship ship={'two'} />
            <Ship ship={'two'} />
            <Ship ship={'one'} />
            <Ship ship={'one'} />
            <Ship ship={'one'} />
            <Ship ship={'one'} />
        </div>
    );
};

export default Ships;
