import React, { Fragment } from 'react';
import classes from './FilterFood.module.css'

export const FilterFood = () => {
    return (
        <div className={classes.Filter_Main}>
            <p className={classes.Filter_Tittle}>Búsqueda</p>
            <input 
                type='text' 
                className={classes.Filter_Input}
            />
            <ul className={classes.Filter_MainList}>
                <li className={classes.Filter_Item}>Tacos</li>
                <li className={classes.Filter_Item}>Tortas</li>
                <li className={classes.Filter_Item}>Quesadillas</li>
                <li className={classes.Filter_Item}>Sopas</li>
                <li className={classes.Filter_Item}>Especialidades</li>
            </ul>
        </div>
    );
};
