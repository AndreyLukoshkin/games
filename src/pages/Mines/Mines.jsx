import React from 'react';

import { rulesMinesGame } from '../../constants';
import ModalWindowRulesStart from '../../layout/ModalWindowRulesStart/ModalWindowRulesStart';
import './styles.css';

const Mines = () => {
    const start = () => {
        return;
    };
    return (
        <div className="mines__wrapper">
            <ModalWindowRulesStart
                mainRules={rulesMinesGame.mainRules}
                textRules={rulesMinesGame.textRules}
                start={start}
            />
            <div className="mines__container">
                <div className="mines__container_top">
                    <div className="mines__container_top_score">start</div>
                    <div className="mines__container_top_smile"></div>
                    <div className="mines__container_top_time"></div>
                </div>
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
        </div>
    );
};

export default Mines;
