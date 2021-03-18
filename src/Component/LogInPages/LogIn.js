import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./FireBaseConfig"

firebase.initializeApp(firebaseConfig);
const LogIn = () => {
   
    const [user, setUser] = useState({
        name:"",
        email : "",
        errorMessage:""
    })
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
    console.log(email);
    setUser(userin);
    
  })
  .catch((error) => {
   
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    setUser(errorMessage);
  
  });
    }
    return (
        <div>
            <h1>this log in pags</h1>
            <p>Name : {user.name}</p>
            <p>email : {user.email}</p>
            <button onClick={handleWithGoogleLogIn}>google</button>
            <p>{user.errorMessage}</p>
           

        </div>
    );
};

export default LogIn;