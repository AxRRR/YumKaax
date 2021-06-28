import React, { Fragment } from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <Fragment>
            <div className={classes.Header_Box}>
                <p className={classes.Header_Tittle}>Registrate con tu cuenta de Google
                    y obtén un cupón de regalo</p>
                    <p className={classes.Header_Text}>Solo válido para usuarios nuevos que se registren con cuenta de Google.</p>
                <button className={classes.Header_Button}>¡Registrate ahora!</button>
            </div>
        </Fragment>
    );
};

export default Header;