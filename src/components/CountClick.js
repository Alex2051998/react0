import React from 'react';
import {useDispatch} from "react-redux";
import {count1Action, count2Action} from "../redux";

const CountClick = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <button onClick={() => dispatch(count1Action.inc())}>inc</button>
                <button onClick={() => dispatch(count1Action.dec())}>dec</button>
                <button onClick={() => dispatch(count1Action.reset())}>res</button>
            </div>
            <div>
                <button onClick={() => dispatch(count2Action.inc(2))}>inc</button>
                <button onClick={() => dispatch(count2Action.dec(2))}>dec</button>
                <button onClick={() => dispatch(count2Action.reset(0))}>res</button>
            </div>
        </div>

    );
};

export {CountClick};