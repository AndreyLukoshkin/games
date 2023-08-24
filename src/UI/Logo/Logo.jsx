import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as ReactLogo } from '../../images/logo.svg';
import './styles.css';

const Logo = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate('/main')} className="header__logo">
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
