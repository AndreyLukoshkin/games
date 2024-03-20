import React, { useEffect, useState } from 'react';

import { cardsObjects } from '../../constants';
import ModalWindow from '../../layout/ModalWindow/ModalWindow';
import { shuffleCards } from '../../utils';
import SingleCard from './SingleCard/SingleCard';
import './styles.css';

const Matched = () => {
    const [startTimerFlipped, setStartTimerFlipped] = useState(false);
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [isMatchedArray, setIsMatchedArray] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isCardOneChoosen, setIsCardOneChoosen] = useState(null);
    const [isCardTwoChoosen, setIsCardTwoChoosen] = useState(null);
    const [time, setTime] = useState(0);

    // TIMER

    let timer;
    let seconds = 0;

    function startTimer() {
        timer = setInterval(() => {
            seconds++;
            console.log(formatTime(seconds));
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
    }

    function resetTimer() {
        clearInterval(timer);
        seconds = 0;
    }

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        return `${hours < 10 ? '0' + hours : hours}:${
            minutes < 10 ? '0' + minutes : minutes
        }:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
    }

    // Пример использования:
    // Начать отсчет
    // После какого-то времени:
    // stopTimer(); // Остановить отсчет
    // resetTimer(); // Сбросить отсчет

    // TIMER END

    const chooseCard = (card) => {
        if (isCardOneChoosen && isCardOneChoosen !== card)
            setIsCardTwoChoosen(card);
        else setIsCardOneChoosen(card);
    };

    const resetTurns = () => {
        setIsCardOneChoosen(null);
        setIsCardTwoChoosen(null);
        setIsDisabled(false);
        setTurns((prev) => (prev += 1));
    };

    useEffect(() => {
        // cards.map((el) => (el.isMatched = true));
        const allMatched =
            cards.length > 0 && cards.every((card) => card.isMatched);

        if (allMatched) {
            setIsMatchedArray(true);
        }

        if (isCardOneChoosen !== null) {
            startTimer();
        }

        if (isCardOneChoosen && isCardTwoChoosen) {
            setIsDisabled(true);
            if (
                isCardOneChoosen.src === isCardTwoChoosen.src &&
                isCardOneChoosen.id !== isCardTwoChoosen.id
            ) {
                setCards((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.src === isCardOneChoosen.src) {
                            return { ...card, isMatched: true };
                        } else {
                            return card;
                        }
                    });
                });
                resetTurns();
            } else {
                setTimeout(() => resetTurns(), 1000);
            }
        }
    }, [isCardOneChoosen, isCardTwoChoosen, cards]);

    const shuffleAndSetCards = () => {
        const shuffledCards = shuffleCards(cardsObjects);
        setCards([...shuffledCards]);
        setTurns(0);
        setIsCardOneChoosen(null);
        setIsCardTwoChoosen(null);
    };

    useEffect(() => {
        shuffleAndSetCards();
    }, []);

    const startMatchedGame = () => {
        shuffleAndSetCards();
        setIsMatchedArray(false);
    };

    return (
        <div className="matched">
            {isMatchedArray && (
                <ModalWindow scores={turns} restart={startMatchedGame} />
            )}
            <div className="matched__scores">
                <div className="score">time </div>
                <div className="score">Turns {turns}</div>
                {/* <div className="score">best time</div> */}
                {/* <div className="score">best moves</div> */}
                {/* <div className="score">a pack of cards</div> */}
                <button onClick={startMatchedGame}>Restart</button>
            </div>
            <div className="matched__cards">
                {cards.map((card) => {
                    return (
                        <SingleCard
                            key={card.id}
                            chooseCard={chooseCard}
                            card={card}
                            flipped={
                                card === isCardOneChoosen ||
                                card === isCardTwoChoosen ||
                                card.isMatched
                            }
                            isDisabled={isDisabled}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Matched;
