import React from "react";
import classes from './ButtonCartAdd.module.css'

export const ButtonCartAdd = ({id, picture, saucer, description, price, amount, handleAddItemCart }) => {
  console.log(handleAddItemCart)
  console.log(id, picture, saucer, description, price, amount, handleAddItemCart)
  return (
    <button
      className={classes.Yumkaax_FoodButton}
      onClick={() => handleAddItemCart({
          id: id,
          picture: picture,
          description: description,
          saucer: saucer,
          price: price,
          amount: amount,
        })
      }
    >
      Agregar
    </button>
  );
};
