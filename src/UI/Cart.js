import React, { useEffect, useState } from 'react'
import classes from './Cart.module.css'

export const Cart = ({ previous = null }) => {
  const [cartList, setCartList] = useState(null)

  console.log('En useeffect')
  console.log(previous)
  console.log(cartList)
  useEffect(() => {
  if(cartList && previous === null) {  
    return
  }
  else {
  setCartList( 
    previous,
    ...previous,
)
}
  }, [previous])
  console.log(cartList)

  return (
    <div className={classes.backdrop}>
      <div className={classes.CartBox}>
        <h1 className={classes.Cart_Tittle}>
          Carrito de compras (subtotal: $500.00 MXN)
        </h1>
        <div className={classes.Cart_BoxAllItems}>
            <ul>
              {previous && cartList !== null ? cartList.map((cartt) => (
                <li key={cartt.id}
                  className={classes.Cart_List}>
                    <div className={classes.Cart_BoxItem}>
                        <img
                        src={cartt.picture}
                        alt={cartt.picture}
                        className={classes.Cart_Picture}
                        />
                        <p className={classes.Cart_Saucer}>{cartt.saucer}</p>
                        <p className={classes.Cart_Description}>{cartt.description}</p>
                        <p className={classes.Cart_Amount}>${cartt.amount} MXN</p>
                        <p className={classes.Cart_DeleteItem}>Borrar de la lista</p>
                    </div>
                </li>
                )) : <p>No has agregado comida a tu carrito</p>} 
          </ul>
        </div>
        <p className={classes.Cart_SubTotal}>Subtotal: $250.00 MXN</p>
        <button className={classes.Cart_ButtonPay}>Realizar pedido</button>
        <button className={classes.Cart_ButtonClean}>Limpiar lista</button>
      </div>
    </div>
  )
}



