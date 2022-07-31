import React from 'react';
import {useSelector} from "react-redux";

const ShowCount = () => {
    const {count1} = useSelector(state => state.count1Reducer);
    const {count2} = useSelector(state => state.count2Reducer);
    return (
        <div>
            <div>
                <h1>Counter: {count1}</h1>
            </div>
            <div>
                <h1>Counter2: {count2}</h1>
            </div>
        </div>
    );
};

export {ShowCount};