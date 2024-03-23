import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';

const Games = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="games__container">
                <div
                    onClick={() => navigate('/matched')}
                    className="games__container_matched"
                >
                    Matched
                </div>
                <div
                    onClick={() => navigate('/matched')}
                    className="games__container_sea"
                >
                    Sea Battle
                </div>
                <div
                    onClick={() => navigate('/matched')}
                    className="games__container_mines"
                >
                    Mines
                </div>
            </div>
        </div>
    );
};

export default Games;
