import React from 'react';

import './styles.css';

const ModalWindow = ({ scores, restart }) => {
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.modal__container_window')) console.log('mimo');
    });
    return (
        <div className="modal__container">
            <div className="modal__container_window">
                <h2 className="modal__container_congrats">
                    Congratulations on your Victory!
                </h2>
                <p className="modal__container_text_victory">
                    Your scores is: {scores}
                </p>
                <button
                    className="modal__container_newgame_button"
                    onClick={restart}
                >
                    NEW GAME
                </button>
            </div>
        </div>
    );
};

export default ModalWindow;
