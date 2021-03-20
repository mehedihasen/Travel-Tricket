import React, { useState } from 'react';
import firebaseConfig from '../LogInPages/FireBaseConfig';
import firebase from "firebase/app";
import  "./create.css"


const Creatacc = () => {
    
    const [user, setUser] = useState({
        email :'',
        password :'',
        name : '',
        error:'',
        succes : false
    })
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
        const addinfo = {...user} 
            addinfo[e.target.name] = e.target.value;
            setUser(addinfo);
        }
      console.log(user);
    } 
    const SubmitHandel =(e) => {
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then( res => {
                const message = {...user}
                message.error= ""
                message.succes = true
                setUser(message)
                
            })
            .catch((error) => {
             
             
              const message = {...user}
              message.error= error.message
              message.succes = false
              setUser(message)
             
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
        <p style={{color:"red"}}>{user.error}</p>
        {
            user.succes && <p style={{color:"green"}}>user creaeted sucssfuly</p>
        }
        </div>
    );
};

export default Creatacc;