import React, { useEffect } from "react";
import classes from "./Navbar.module.css";
import Logo from '../assets/YumKaaxTaco.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { UserScreen } from "../components/UserScreen";

export const Navbar = (props) => {
  const state = useSelector((state) => state.auth);

  useEffect(() => {
  }, [state]);

  return (
    <div className={classes.YumKaax_Navbarbox}>
      <ul className={classes.YumKaax_Navbarlist}>
        <li>
          <FontAwesomeIcon icon={faBars} 
            className={classes.YumKaax_NavbarIcon}
            onClick={props.onShowSidebar} />
        </li>
        <li>
          {state.name > 1 ? <button
            className={classes.YumKaax_Navbaritem}
            onClick={props.onShowModal}>
            Iniciar sesión
          </button>
           : (
            <UserScreen name={state.name} imageUrl={state.imageUrl} />
           )
}
        </li>
      </ul>
    </div>
  );
};
