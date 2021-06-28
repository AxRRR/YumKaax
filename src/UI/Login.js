import React from "react";
import Modal from "./Modals/Modal";
import classes from "./Login.module.css";

const Login = (props) => {
  return (
    <Modal>
      <h1 onClick={props.onClose} className={classes.Login_ButtonClose}>
        x
      </h1>
      <h1 className={classes.Login_Tittle}>Inicia sesión</h1>
      <div className={classes.Login_Box}>
        <input type="text" className={classes.Login_Input} />
        <input type="password" className={classes.Login_Input} />
        <button className={classes.Login_Button}>Acceder</button>
        <img
          src="https://i.stack.imgur.com/oL5c2.png"
          alt="Google Sign"
          className={classes.FacebookSignUp}
        />
        <img
          src="https://www.oncrashreboot.com/images/create-apple-google-signin-buttons-quick-dirty-way-google.png"
          alt="Google Sign"
          className={classes.GoogleSignUp}
        />
      </div>
    </Modal>
  );
};

export default Login;
