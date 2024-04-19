import React from "react";
import {TodoIcon} from './';

function CompleteIcon({completed, onComplete}){
    return (
        <TodoIcon
            type="check"
            color={completed ? '#4CAF50' : '#C9C9C9'}
            onClick={onComplete}

        />
    );
}

export { CompleteIcon };