import React, { useContext, useState } from 'react';
import firebaseConfig from '../LogInPages/FireBaseConfig';
import firebase from "firebase/app";
import  "./create.css"
import { contextSher } from '../../App';


const Creatacc = () => {

    const [logInfo, setLogInfo] = useContext(contextSher);
    console.log("contex :", logInfo);
   
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }

    const handelLogin = (e)=>{
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
        const addinfo = {...logInfo} 
            addinfo[e.target.name] = e.target.value;
          
            setLogInfo(addinfo)
        }
    } 
    const SubmitHandel =(e) => {
       
        if (logInfo.email && logInfo.password) {
            firebase.auth().createUserWithEmailAndPassword(logInfo.email, logInfo.password)
            .then( res => {
                const message = {...logInfo}
                message.error= ""
                message.succes = true
                
                setLogInfo(message)
                
            })
            .catch((error) => {
             
             
              const message = {...logInfo}
              message.error= error.message
              message.succes = false
           
            setLogInfo(message)
             
              // ..
            });
            
        }
    e.preventDefault()
    }
    return (
        <div className="maine">
            <h2>Creat Account</h2>
             <form onClick={SubmitHandel}>
             <input type="text" name="name"  className="input" onBlur={handelLogin}  placeholder="type name" required/>
             <input type="text" name="email" id="" onBlur={handelLogin} className="input" placeholder="type email" required/>
                <br/>
                <input type="password" name="password" id="" onBlur={handelLogin}  className="input" placeholder="type password" required/>
                <br/>
                <input type="submit" value="submit" className="submit"/>  
             </form>
        <p style={{color:"red"}}>{logInfo.error}</p>
        {
        logInfo.succes && <p style={{color:"green"}}>user creaeted sucssfuly</p>
        }
        </div>
    );
};

export default Creatacc;