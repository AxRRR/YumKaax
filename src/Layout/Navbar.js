import React from "react";
import classes from "./Navbar.module.css";
import Logo from '../assets/YumKaaxTaco.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Cart } from "../UI/Cart/Cart";

export const Navbar = (props) => {
  console.log(props.onVisibility)
  return (
    <div className={classes.YumKaax_Navbarbox}>
      <ul className={classes.YumKaax_Navbarlist}>
        <li>
          <img
            src={Logo}
            alt="Imglogo"
            className={classes.YumKaax_Navbarimg}
          />
        </li>
        <li>
          <button
            className={classes.YumKaax_Navbaritem}
            onClick={props.onShowModal}>
            Iniciar sesión
          </button>
        </li>
        <li>
        <FontAwesomeIcon icon={faShoppingCart} 
          onClick={() => Cart(props.onVisibility)}
          className={classes.YumKaax_NavbarCart} 
         />
        </li>
      </ul>
    </div>
  );
};
