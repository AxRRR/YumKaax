import React, { useState } from "react";
import { Cart } from "../UI/Cart";
import classes from "./Home.module.css";

export const Home = (props) => {
  const [food, setFood] = useState([]);
  const [previous, setPrevious] = useState([]);
  //const [id, setId] = useState([]);

  React.useEffect(() => {
    FoodList();
  }, []);

  const FoodList = async () => {
    const url = await fetch("http://localhost:8080/api/foods");
    const foods = await url.json();
    setFood(foods);
  };

  const setFoodPrevious = (menu) => {
    setPrevious(menu)
  } 

  return (
    <div>
      <Cart onPassId={previous} />
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
