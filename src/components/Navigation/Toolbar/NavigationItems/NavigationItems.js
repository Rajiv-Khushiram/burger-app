import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem'
const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active> Burger Builder </NavigationItem>
        <NavigationItem link="/" > Check out Page </NavigationItem>

    </ul>
)

export default NavigationItems