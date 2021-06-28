import React, { useEffect, useReducer } from "react";
import { cartReducer } from "../../components/Reducers/cartReducer";
import { Home } from "../../Home/Home";
import classes from "./Cart.module.css";

export const Cart = ({ onVisibility }) => {
  const [itemsCart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    localStorage.setItem("itemsCart", JSON.stringify(itemsCart));
  }, [itemsCart]);

  const handleAddItemCart = (GetDataList) => {
    dispatch({
      type: "add",
      payload: GetDataList,
    });
  };

  const handleDeleteRowCart = (GetRowToDelete) => {
    dispatch({
      type: "delete",
      payload: GetRowToDelete,
    });
  };

  const handleDeleteAllCart = () => {
    dispatch({
      type: "deleteall",
    });
  };

  // const handleTotalPriceCart = () => {
  //   dispatch({
  //     type: 'totalprice'
  //   })
  // }

  return (
    <div>
      <Home handleAddItemCart={handleAddItemCart} />
      <div className={classes.backdrop2}>
        <div style={{visibility: onVisibility}} className={classes.CartBox}>
          {itemsCart.length >= 1 ? (
            <h1 className={classes.Cart_Tittle}>
              Carrito de compras (número de articulos: {itemsCart.length} )
            </h1>
          ) : (
            <h1 className={classes.Cart_Tittle}>¡Carrito de compras vacío!</h1>
          )}
          <div className={classes.Cart_BoxAllItems}>
            <ul>
              {itemsCart.length >= 1 ? (
                itemsCart.map((item) => (
                  <li key={item.id} className={classes.Cart_List}>
                    <div className={classes.Cart_BoxItem}>
                      <img
                        src={item.picture}
                        alt={item.picture}
                        className={classes.Cart_Picture}
                      />
                      <p className={classes.Cart_Saucer}>{item.saucer}</p>
                      <p className={classes.Cart_Description}>
                        {item.description}
                      </p>
                      <p className={classes.Cart_Amount}>${item.amount} MXN</p>
                      <p
                        className={classes.Cart_DeleteItem}
                        onClick={() => handleDeleteRowCart(item.id)}
                      >
                        Borrar de la lista
                      </p>
                    </div>
                  </li>
                ))
              ) : (
                <p>
                  No tienes ningún articulo para mostrar en tu Carrito de
                  Compras
                </p>
              )}
            </ul>
          </div>
          <p className={classes.Cart_SubTotal}>Subtotal: $500.00 MXN</p>
          <button className={classes.Cart_ButtonPay}>Realizar pedido</button>
          <button
            className={classes.Cart_ButtonClean}
            onClick={handleDeleteAllCart}
          >
            Limpiar lista
          </button>
        </div>
      </div>
    </div>
  );
};
