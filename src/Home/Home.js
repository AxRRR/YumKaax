import React from "react";
import { Previous } from "../UI/Previous";
import classes from "./Home.module.css";

export const Home = (props) => {
  const [food, setFood] = React.useState([]);
  
  React.useEffect(() => {
    FoodList();
  }, []);

  const FoodList = async () => {
    const url = await fetch("http://localhost:8080/api/foods");
    const foods = await url.json();
    setFood(foods);
  };

  const setFoodPrevious = (id, saucer, amount) => {
    let informacion = ({
        id, 
        saucer, 
        amount
    });
    return Previous(informacion);
  }

  return (
    <div>
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
              onClick={() => setFoodPrevious(
                foods.id,
                foods.saucer,
                foods.amount,
              )}>
                Descripcion completa
              </button>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};
