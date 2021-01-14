import React from 'react';
import classes from './Button.module.css'

type ButtonProps = {
    disabled: boolean,
    type: string,
    clicked: () => void
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            className={[classes.Button, classes[props.type]].join(' ')}
            disabled={props.disabled}
            onClick={props.clicked}> { props.children} </button>
    );
}
