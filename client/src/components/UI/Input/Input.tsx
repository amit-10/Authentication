import React from 'react';
import classes from './Input.module.css'

type InputProps = {
    placeholder: string
}

export const Input: React.FC<InputProps> = (props) => {
    return (
        <div className={classes.Input}>
            <input className={classes.InputElement} placeholder={props.placeholder} />
        </div>
    );
}
