import React from 'react';

import { rulesMinesGame } from '../../constants';
import ModalWindowRulesStart from '../../layout/ModalWindowRulesStart/ModalWindowRulesStart';
import './styles.css';

const Mines = () => {
    const start = () => {
        return;
    };
    return (
        <div className="mines__container">
            <ModalWindowRulesStart
                mainRules={rulesMinesGame.mainRules}
                textRules={rulesMinesGame.textRules}
                start={start}
            />
            <div className="mines__container_field">
                {Array(10 * 10)
                    .fill()
                    .map((el, index) => (
                        <div
                            className="mines__container_field_cell"
                            key={index}
                        >
                            {index}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Mines;
