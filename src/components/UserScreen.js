import React from 'react';
import classes from './UserScreen.module.css'

export const UserScreen = ( { name, imageUrl }) => {
    return (
        <>
        <p className={classes.UserScreen_Name}>{name}</p>
        <img
            src={imageUrl}
            alt={imageUrl}
            className={classes.UserScreen_Img}
            />
        </>
    );
};
