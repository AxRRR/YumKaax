import React, { useEffect, useState } from "react";
import { Cart } from "../UI/Cart";
import classes from "./Home.module.css";

export const Home = () => {
  const [food, setFood] = useState([]);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    FoodList();
  }, []);

  const FoodList = async () => {
    const url = await fetch("http://localhost:8080/api/foods");
    const foods = await url.json();
    setFood(foods);
  };

  const setFoodPrevious = (menu) => {
    if(previous === null) {
      setPrevious([ 
        menu, 
      ])
      }
      else {
        setPrevious([
          ...previous, 
          menu, 
        ])
      }
      console.log(previous)
  } 

  return (
    <div>
    {previous !== null && <Cart previous={previous} /> }
      <ul className={classes.Yumkaax_FoodBox}>
        <div>
          <h1>Menú de comida:</h1>
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
              onClick={ () => setFoodPrevious({
                id: foods.id,
                picture: foods.picture,
                description: foods.description,
                saucer: foods.saucer,
                amount: foods.amount
                })}>
                Agregar pedido
              </button>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};
