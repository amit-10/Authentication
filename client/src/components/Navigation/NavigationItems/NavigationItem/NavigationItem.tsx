import * as React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavigationItem.module.css'

type NavigationItemProps = {
    link: string
}

export const NavigationItem: React.FC<NavigationItemProps> = (props) => {
    const title = props.link.charAt(0).toUpperCase() + props.link.slice(1);
    return (
    <Link className={classes.NavigationItemTitle} to={props.link}>{title}</Link>
        )
};

