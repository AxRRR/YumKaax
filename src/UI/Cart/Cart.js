import React, { useEffect, useState } from "react";
import { Home } from "../../Home/Home";
import classes from "./Cart.module.css";

export const Cart = ({ GetDataList, ResetPrevious }) => {
  const [cartList, setCartList] = useState(null);
  const [itemsList, setItemsList] = useState(null)
  const [resetList, setResetList] = useState(false)

  useEffect(() => {
    if (GetDataList === null) {
      return setItemsList(null)
    } else {
      setItemsList(GetDataList, ...GetDataList);
      setCartList(itemsList);
      setResetList(ResetPrevious);
    }
  }, [GetDataList]);

  const handleCleanList = () => {
    setResetList(true)
    setItemsList(null)
    setCartList(null)
  }
  
  console.log('Aca es Global Cart')
  console.log(itemsList)
  console.log(cartList)
  return (
    <div className={classes.backdrop2}>
      <div className={classes.CartBox}>
        <h1 className={classes.Cart_Tittle}>
          Carrito de compras (subtotal: $500.00 MXN)
        </h1>
        <div className={classes.Cart_BoxAllItems}>
          <ul>
            {itemsList && cartList !== null ? (
              cartList.map((cartt) => (
                <li key={cartt.id} className={classes.Cart_List}>
                  <div className={classes.Cart_BoxItem}>
                    <img
                      src={cartt.picture}
                      alt={cartt.picture}
                      className={classes.Cart_Picture}
                    />
                    <p className={classes.Cart_Saucer}>{cartt.saucer}</p>
                    <p className={classes.Cart_Description}>
                      {cartt.description}
                    </p>
                    {/* {  setTotal(cartt.amount + cartt.amount) } */}
                    <p className={classes.Cart_Amount}>${cartt.amount} MXN</p>
                    <p className={classes.Cart_DeleteItem}>
                      Borrar de la lista
                    </p>
                  </div>
                </li>
              ))
              ) : (
                <p>No has agregado comida a tu carrito</p>
                )}
          </ul>
        </div>
        <p className={classes.Cart_SubTotal}>Subtotal: $250.00 MXN</p>
        <button className={classes.Cart_ButtonPay}>Realizar pedido</button>
        <button 
          className={classes.Cart_ButtonClean}
          onClick={handleCleanList}
          >
            Limpiar lista
        </button>
          { resetList && <Home ResetPrevious={ resetList } /> }
      </div>
    </div>
  );
};
