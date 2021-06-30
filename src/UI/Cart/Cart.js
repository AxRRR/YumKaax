import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cleanCartList, deleteRowCart } from "../../actions/cart";
import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

export const Cart = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const [price, SetPrice] = useState(0);
  // localStorage.setItem("state", JSON.stringify(state));

  useEffect(() => {
    
  }, [state]);

  const handleDeleteRowCart = (GetRowToDelete) => {
    dispatch(deleteRowCart(GetRowToDelete));
  };

  const handleDeleteAllCart = () => {
    dispatch(cleanCartList());
  };

  return (
    <div>
      <div className={classes.backdrop2}>
        <div className={classes.CartBox}>
          {state.length >= 1 ? (
            <h1 className={classes.Cart_Tittle}>
              Carrito de compras (número de articulos: {state.length} )
            </h1>
          ) : (
            <h1 className={classes.Cart_Tittle}>¡Carrito de compras vacío!</h1>
          )}
          <div className={classes.Cart_BoxAllItems}>
            <ul>
              {state.length >= 1 ? (
                state.map((item) => (
                  <li key={item.id} className={classes.Cart_List}>
                    <div className={classes.Cart_BoxItem}>
                      <p
                        className={classes.Cart_DeleteItem}
                        onClick={() => handleDeleteRowCart(item.id)}>x
                      </p>
                      <img
                        src={item.picture}
                        alt={item.picture}
                        className={classes.Cart_Picture}
                      />
                      <p className={classes.Cart_Saucer}>{item.saucer}</p>
                      <p className={classes.Cart_Description}>
                        {item.description}
                      </p>
                      <p className={classes.Cart_Amount}>${item.price} MXN</p>
                    </div>
                  </li>
                ))
              ) 
              : (
                <p>
                  No tienes ningún articulo para mostrar en tu Carrito de
                  Compras
                </p>
              )}
            </ul>
          </div>
          <p className={classes.Cart_SubTotal}>Total: $500.00 MXN</p>
          <button className={classes.Cart_ButtonPay}>Realizar pedido</button>
          <button
            className={classes.Cart_ButtonClean}
            onClick={handleDeleteAllCart}>
            Limpiar lista
          </button>
          <div className={classes.Cart_BoxIconReturn}>
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            className={classes.Cart_IconClose}
            onClick={props.onCloseCartModal}
          />
          </div>
        </div>
      </div>
    </div>
  );
};
