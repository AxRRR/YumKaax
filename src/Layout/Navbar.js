import React from "react";
import classes from "./Navbar.module.css";
import Logo from '../assets/YumKaaxTaco.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = (props) => {
  return (
    <div className={classes.YumKaax_Navbarbox}>
      <ul className={classes.YumKaax_Navbarlist}>
        <li>
          <FontAwesomeIcon icon={faBars} 
            className={classes.YumKaax_NavbarIcon}
            onClick={props.onShowSidebar} />
        </li>
        <li>
          <button
            className={classes.YumKaax_Navbaritem}
            onClick={props.onShowModal}>
            Iniciar sesión
          </button>
        </li>
      </ul>
    </div>
  );
};
