import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";

export const Home = ( { handleAddItemCart } ) => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    FoodList();
  }, []);

  const FoodList = async () => {
    const url = await fetch("http://localhost:8080/api/foods");
    const foods = await url.json();
    setFood(foods);
  };
  
  return (
    <div>
      <ul className={classes.Yumkaax_FoodBox}>
        <div>
          <h1 className={classes.Yumkaax_FoodTittle}>Tacos disponibles:</h1>
          {food.map((foods) => (
            <li key={foods.id} className={classes.Yumkaax_FoodList}>
              <img
                src={foods.picture}
                alt={foods.picture}
                className={classes.Yumkaax_FoodPicture}
              />
              <h4 className={classes.Yumkaax_FoodSaucer}>{foods.saucer}</h4>
              <p className={classes.Yumkaax_FoodDescription}>
                {foods.description}
              </p>
              <p className={classes.Yumkaax_FoodAmount}>${foods.amount}</p>
              <button className={classes.Yumkaax_FoodButton}
              onClick={ () => handleAddItemCart({
                id: foods.id,
                picture: foods.picture,
                description: foods.description,
                saucer: foods.saucer,
                price: foods.price,
                amount: foods.amount
              })}>
                Agregar
              </button>
            </li>
          ))}
      </div>
      </ul>
    </div>
  );
};
