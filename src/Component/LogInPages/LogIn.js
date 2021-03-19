import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./FireBaseConfig"
import { contextSher } from '../../App';
import { useHistory, useLocation } from 'react-router';
import "./login.css"


firebase.initializeApp(firebaseConfig);

const LogIn = () => {

    const handleSelfLogin = () => {
        console.log("cliked");
    }





   const [logInfo, setLogInfo] = useContext(contextSher);
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleWithGoogleLogIn = () => {
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const {displayName, email} = result.user;
    const userin = {
        name : displayName,
        email : email
    }
    setLogInfo(userin);
    history.replace(from)
    
  })
  .catch((error) => {
   
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    logInfo(errorMessage);
  
  });
    }
    return (
        <div className="maine">
            <form action="">
                <input type="text" name="name" id="" value="" onBlur={handleSelfLogin} placeholder="type your name" required/>
                <br/>
                <input type="email" name="email" id="" value=""onBlur={handleSelfLogin} placeholder="type your email" required/>
                <br/>
                <input type="password" name="password" value="" onBlur={handleSelfLogin} id="" placeholder="type password" required/>
                <input type="submit" value=""/>
            </form>




            <h1>this log in pags</h1>
            <p>Name : {logInfo.name}</p>
            <p>email : {logInfo.email}</p>
            <button onClick={handleWithGoogleLogIn}>google</button>
            <p>{logInfo.errorMessage}</p>
           

        </div>
    );
};

export default LogIn;