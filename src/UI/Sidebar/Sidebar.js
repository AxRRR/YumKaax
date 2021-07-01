import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./Sidebar.module.css";
import { Cart } from '../Cart/Cart'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";


export const Sidebar = (props) => {
  const [showCart, SetShowCart] = useState(false);
  const state = useSelector((state) => state.auth);

  useEffect(() => {
  }, [showCart, state]);

  const showCartSidebar = () => {
    SetShowCart(true)
  }

  const hideCartSidebar = () => {
    SetShowCart(false)
  }

  return (
    <div>
      <div className={classes.Sidebar_Box}>
        <div className={classes.Sidebar_ContentBox}>
          <h1 className={classes.Sidebar_Logo}>Yum-Kaax</h1>
          <hr />
          <p className={classes.Sidebar_Item}>
            <FontAwesomeIcon icon={faHome} className={classes.Sidebar_Icon} />
            Inicio de página
          </p>
          <ul className={classes.Sidebar_List}>
            <div className={classes.Sidebar_HeaderBox}>
              <h1 className={classes.Sidebar_HeaderTittle}>Compras</h1>
              <li className={classes.Sidebar_Item}
              onClick={props.onShowModalCart}>
              <FontAwesomeIcon
                  className={classes.Sidebar_Icon}
                  icon={faShoppingCart}
                />
                Carrito de Compras
                {/* { showCart && <Cart /> } */}
              </li>
              <li className={classes.Sidebar_Item}>
                <FontAwesomeIcon
                  icon={faTag}
                  className={classes.Sidebar_Icon}
                />
                Descuentos
              </li>
              <li className={classes.Sidebar_Item}>
                <FontAwesomeIcon
                  icon={faMapMarker}
                  className={classes.Sidebar_Icon}
                />
                Sucursales
              </li>
              <li className={classes.Sidebar_Item}>
                <FontAwesomeIcon
                  icon={faStickyNote}
                  className={classes.Sidebar_Icon}
                />
                Términos Legales
              </li>
            </div>
          </ul>
          <ul className={classes.Sidebar_List}>
            <div className={classes.Sidebar_HeaderBox}>
              <h1 className={classes.Sidebar_HeaderTittle}>Usuario</h1>
              <li className={classes.Sidebar_Item}>
                <FontAwesomeIcon
                  icon={faUserPlus}
                  className={classes.Sidebar_Icon}
                />
                Crear cuenta
              </li>
              <li className={classes.Sidebar_Item}>
                <FontAwesomeIcon
                  icon={faSignInAlt}
                  className={classes.Sidebar_Icon}
                />
                Iniciar sesión
              </li>
              <li className={classes.Sidebar_Item}>
                <FontAwesomeIcon
                  icon={faCog}
                  className={classes.Sidebar_Icon}
                />
                Editar perfil
              </li>
              <li className={classes.Sidebar_Item}>
                <FontAwesomeIcon
                  icon={faComments}
                  className={classes.Sidebar_Icon}
                />
                Opiniones
              </li>
            </div>
          </ul>
        </div>
        <div className={classes.Sidebar_ProfileBox}>
          <img
            src={state.imageUrl}
            alt="EL axR"
            className={classes.Sidebar_Imagen}
          />
          <p className={classes.Sidebar_ProfileName}>
            {state.name}
          </p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            className={classes.Sidebar_IconClose}
            onClick={props.onCloseSidebar}
          />
        </div>
      </div>
    </div>
  );
};
