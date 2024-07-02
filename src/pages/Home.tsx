import React from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {counterState, incrementCounter, decrementCounter} from '../recoil';

const Counter: React.FC = () => {
    const counter = useRecoilValue(counterState);
    const incrementRecoil = useSetRecoilState(incrementCounter);
    const decrementRecoil = useSetRecoilState(decrementCounter);
    const handleIncrement = () => incrementRecoil(counter + 1);
    const handleDecrement = () => decrementRecoil(counter - 1);


    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    );
};

export default Counter;
