import React, { Fragment } from "react";
import classes from "./Previous.module.css";

export const Previous = (id) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.Box}>
        <h1 className={classes.Titulo}>Descripción del producto:</h1>
        <img
          src="https://comidamexicana.online/wp-content/uploads/2019/12/tacos-al-pastor.jpg"
          alt="Img"
          className={classes.Img}
        />
        <div className={classes.BoxInfo}>
          <h3 className={classes.Platillo}>Tacos al Pastor</h3>
          <p className={classes.Parrafo}>
            Orden de cuatro deliciosos y exquisitos tacos al pastor con dos
            salsas(roja y verde) pepinos, rábanos y cebolla
          </p>
          <p className={classes.Precio}>$149.00 MXN</p>
          <input type="text" onFocus="4" className={classes.input} />
          <button className={classes.OrderButton}>Ordenar ahora</button>
          <button className={classes.AddButton}>Agregar a mi lista</button>
        </div>
      </div>
    </div>
  );
};
