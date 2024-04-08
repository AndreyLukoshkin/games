import React from 'react';

import { rulesSeaBattleGame } from '../../../constants';
import ModalWindowRulesStart from '../../../layout/ModalWindowRulesStart/ModalWindowRulesStart';
import Field from '../Fields/Field';
import Ships from '../Ships/Ships';
import './styles.css';

const SeaBattle = () => {
    const start = () => {
        return;
    };

    return (
        <div className="seabattle__container">
            <ModalWindowRulesStart
                mainRules={rulesSeaBattleGame.mainRules}
                textRules={rulesSeaBattleGame.textRules}
                start={start}
            />
            <Ships />
            <Field />
        </div>
    );
};

export default SeaBattle;
