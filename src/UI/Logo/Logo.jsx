import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';

const Logo = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate('/main')} className="header__logo">
            <img
                src="/images/logo.svg"
                style={{
                    width: '20px',
                    height: '20px',
                    marginRight: '5px',
                }}
                alt="logo"
            />
            MAIN
        </div>
    );
};

export default Logo;
