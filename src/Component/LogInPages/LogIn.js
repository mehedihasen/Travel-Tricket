import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./FireBaseConfig"
import { contextSher } from '../../App';
import { useHistory, useLocation } from 'react-router';
import "./login.css"
import { Link } from 'react-router-dom';




const LogIn = () => {

    const [logInfo, setLogInfo] = useContext(contextSher);
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    const Fbprovider = new firebase.auth.FacebookAuthProvider();
    const gooleprovider = new firebase.auth.GoogleAuthProvider();

    const handleWithGoogleLogIn = () => {
        firebase.auth()
            .signInWithPopup(gooleprovider)
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
                setLogInfo(errorMessage);

            });
    }

    const handleWithFacbookLogIn = () => {
        firebase
            .auth()
            .signInWithPopup(Fbprovider)
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
                setLogInfo(errorMessage);
            });
    }



    const handelLogin = (e) => {
        let IsVlaied = true;
        if (e.target.name === "email") {
            IsVlaied = /\S+@\S+\.\S+/.test(e.target.value);

        }

        if (e.target.name === "password") {
            const len = e.target.value.length > 6;
            const vlied = /\d{1}/.test(e.target.value);
            IsVlaied = len && vlied;
        }
        if (IsVlaied) {
            const addinfo = { ...logInfo }
            addinfo[e.target.name] = e.target.value;

            setLogInfo(addinfo)
        }
       
    }
    const SubmitHandel = (e) => {
        firebase.auth().signInWithEmailAndPassword(logInfo.email, logInfo.password)
            .then(result => {
                console.log("loginuserinfo :", result);
                const { email } = result.user;
                const userin = {
                    email: email
                }
                setLogInfo(userin);
                history.replace(from)

            })
            .catch(error => {

                const errorMessage = error.message;
                logInfo(errorMessage);

            });

        e.preventDefault()
    }

  

    return (

        <div className=" maine">
            <div>
                <h3>Log In </h3>
                <form onClick={SubmitHandel}>

                    <input type="text" name="email" id="" onBlur={handelLogin} className="input" placeholder="type email" required />
                    <br />
                    <input type="password" name="password" id="" onBlur={handelLogin} className="input" placeholder="type password" required />
                    <br />
                    <input type="submit" value="submit" className="submit" />
                </form>

            </div>
            <Link to="/Creatacc">Create acc</Link>
            <p>or</p>

            <button onClick={handleWithGoogleLogIn} className="google">Login with google</button>
            <button onClick={handleWithFacbookLogIn} className="google">Login with Facebook</button>
        </div>

    );
};

export default LogIn;