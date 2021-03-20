import React, { useState } from 'react';
import "./foram.css"

const Foram = () => {
    const [user, setUser] = useState({
        email:'',
        password:''
    })
    const handleLog = (e) => {
        let IsFiledValed = true;

        if (e.target.name === "email") {
            IsFiledValed = /\S+@\S+\.\S+/.test(e.target.value)
            
        }

        if (e.target.name === "password") {
            const passwordVled = e.target.value.length > 6 ;
            const passwordNum = /\d{1}/.test(e.target.value)
            IsFiledValed = passwordVled && passwordNum
            
        }
        if (IsFiledValed) {
            
        }
        console.log(user);
       
    }

   
    return (
        <div className="continer">

            <h2>Sing Up Here</h2>
            
            <form action="">
                <input type="text" name="email" id="" placeholder="Type Email" onBlur={handleLog} required/>
                <br/>
                <input type="password" name="password" id="" placeholder="Type password" onBlur={handleLog} required/>
                <br/>
                <input type="submit" value="submit"/>
            </form>
            
        </div>
    );
};

export default Foram  