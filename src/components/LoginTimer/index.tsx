import React, { useEffect, useState } from "react";


interface iLoginTimer {
    onEnd: () => void;
    min: number;
    second: number;
}



const LoginTimer: React.FC<iLoginTimer> = ({ onEnd, min, second }) => {
    const MINUTES_IN_MS: number = min * 60 * 1000 + second * 1000;
    const INTERVAL: number = 1000;

    const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - INTERVAL);
        }, INTERVAL);

        if (timeLeft <= 0) {
            clearInterval(timer);
            onEnd();
        }

        return () => clearInterval(timer);

    }, [timeLeft]);


    const formatTime = (time: number) => String(Math.floor(time)).padStart(2, '0');
    const leftMinutes = formatTime(timeLeft / (1000 * 60) % 60);
    const leftSeconds = formatTime((timeLeft / 1000) % 60);


    return (
        <>
            {leftMinutes} : {leftSeconds}
        </>
    );
};

export default LoginTimer;