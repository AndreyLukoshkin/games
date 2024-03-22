import React, { useState } from 'react';

import './styles.css';

const ModalWindowRulesStart = ({ start }) => {
    const [startGameCloseModal, setStartGameCloseModal] = useState(false);

    function closeModalWindow() {
        setStartGameCloseModal(true);
        start();
    }

    return (
        <div
            className={
                startGameCloseModal
                    ? `close modal_window_rules_start__container`
                    : `open modal_window_rules_start__container`
            }
        >
            <div className="modal_window_rules_start__container_window">
                <h2 className="modal_window_rules_start__container_rules_text">
                    The rules of the Matched game
                </h2>
                <p className="modal_window_rules_start__container_rules_text">
                    Here is the rules: just find the same pictures, good luck!
                </p>
                <button
                    className="modal_window_rules_start__container_newgame_button"
                    onClick={closeModalWindow}
                >
                    Let's go!
                </button>
            </div>
        </div>
    );
};

export default ModalWindowRulesStart;
