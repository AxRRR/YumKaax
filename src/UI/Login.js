import React from "react";
import GoogleLogin from 'react-google-login';
import Modal from "./Modals/Modal";
import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../actions/auth";

const Login = (props) => {

  const dispatch = useDispatch();

  const responseGoogle = ({ profileObj }) => {
    console.log(profileObj)
    dispatch( loginWithGoogle(profileObj.googleId, profileObj.name, profileObj.email, profileObj.imageUrl) )
  }
  
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
        {/* <img
          src="https://i.stack.imgur.com/oL5c2.png"
          alt="Google Sign"
          className={classes.FacebookSignUp}
        /> */}
        <GoogleLogin
          clientId="376676721491-30jufr1sfi4pd9a46mjs3ea741ncgid5.apps.googleusercontent.com"
          buttonText="Inicia sesión con Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </Modal>
  );
};

export default Login;
