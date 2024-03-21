import React, { useEffect } from 'react';

import './styles.css';

const Timer = ({ isMatchedArray, time, setTime }) => {
    useEffect(() => {
        let intervalId;

        if (!isMatchedArray) {
            intervalId = setInterval(() => {
                setTime((prevTime) => {
                    const newSeconds = prevTime.seconds + 1;
                    const newMinutes =
                        prevTime.minutes + Math.floor(newSeconds / 60);
                    const newHours =
                        prevTime.hours + Math.floor(newMinutes / 60);

                    return {
                        hours: newHours,
                        minutes: newMinutes % 60,
                        seconds: newSeconds % 60,
                    };
                });
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isMatchedArray, setTime]);

    return (
        <div>
            <p>
                Time: {time.hours < 10 ? '0' + time.hours : time.hours}:
                {time.minutes < 10 ? '0' + time.minutes : time.minutes}:
                {time.seconds < 10 ? '0' + time.seconds : time.seconds}
            </p>
        </div>
    );
};

export default Timer;
