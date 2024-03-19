import React from 'react';

import './styles.css';

const SingleCard = ({ card, chooseCard, flipped, isDisabled }) => {
    const handleChooseCard = () => {
        if (!isDisabled) {
            chooseCard(card);
        }
    };

    return (
        <div className="matched__card">
            <div className={flipped ? 'matched__card_flipped' : ''}>
                <img
                    className="matched__card_front"
                    src={card.src}
                    alt="front"
                />
                <img
                    onClick={handleChooseCard}
                    className="matched__card_back"
                    src="/images/back.jpg"
                    alt="back"
                />
            </div>
        </div>
    );
};

export default SingleCard;
