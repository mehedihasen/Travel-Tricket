import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./FireBaseConfig"
import { contextSher } from '../../App';
import { useHistory, useLocation } from 'react-router';
import "./login.css"




const LogIn = () => {
    const [logInfo, setLogInfo] = useContext(contextSher);
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleWithGoogleLogIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const userin = {
                    name: displayName,
                    email: email
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

        <div className=" maine">
            <div>
                <h3>Log In</h3>
                
                <input type="email" name="" id="" className="input" placeholder="type email" required/>
                <br/>
                <input type="password" name="" id="" className="input" placeholder="type password" required/>
                <br/>
                <input type="submit" value="submit" className="submit"/>
            </div>
           <p>or</p>
            
            <button onClick={handleWithGoogleLogIn} className="google">Login with google</button>
         </div>
       
    );
};

export default LogIn;