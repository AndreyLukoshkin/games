import React from 'react';

import { ReactComponent as ReactLogo } from '../../images/logo.svg';
import './styles.css';

const Logo = () => {
    return (
        <div className="header__logo">
            <ReactLogo
                style={{
                    width: '20px',
                    height: '20px',
                    marginRight: '5px',
                }}
            />
            MAIN
        </div>
    );
};

export default Logo;
