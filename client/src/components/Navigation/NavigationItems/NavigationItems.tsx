import * as React from 'react';
import { NavigationItem } from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

export const NavigationItems = () => (
    <div className={classes.NavigationItems}>
        <NavigationItem link='home' />
        <NavigationItem link='page1' />
        <NavigationItem link='page2' />
    </div>
);

