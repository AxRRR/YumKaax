import React, { useEffect, useState } from 'react'
import classes from './Cart.module.css'

export const Cart = ({ onPassId = 0 }) => {
  const [id, setId] = useState(onPassId)

  useEffect(() => {
    setId(onPassId)
  }, [onPassId])

  return (
    <>
      <div className={classes.CartBox}>
        <h1 className={classes.Cart_Tittle}>
          Carrito de compras (subtotal: $500.00 MXN)
        </h1>
        <div className={classes.Cart_BoxAllItems}>
          <div className={classes.Cart_BoxItem}>
            <img
              src={id.picture}
              alt={id.picture}
              className={classes.Cart_Picture}
            />
            <p className={classes.Cart_Saucer}>{id.saucer}</p>
            <p className={classes.Cart_Description}>{id.description}</p>
            <p className={classes.Cart_Amount}>${id.amount} MXN</p>
            <p className={classes.Cart_DeleteItem}>Borrar de la lista</p>
          </div>
        </div>
        <p className={classes.Cart_SubTotal}>Subtotal: ${id.amount} MXN</p>
        <button className={classes.Cart_ButtonPay}>Realizar pedido</button>
        <button className={classes.Cart_ButtonClean}>Limpiar lista</button>
      </div>
    </>
  )
}
