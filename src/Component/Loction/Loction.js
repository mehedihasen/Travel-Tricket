import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import "./loction.css"

const Loction = () => {
    
    const {name} = useParams();
  

    const handlesarch = (e) =>{
        
    }
    const hendelforam =()=>{

    }

    return (
            
            <div className="mainloc">
                <div className="serchloc">
                    <form onBlur= {hendelforam}>
                    <h3>From</h3>
                    <input type="text" name="from" id="" placeholder="set loction" required onBlur={handlesarch}/>
                    <br/>
                    <h3>To</h3>
                    <input type="text" name="to" id="" placeholder="set loction where you will go " required onBlur={handlesarch}/>
                
                    <br/>
                    

                    </form>
          
                </div>

                <div className="serchimg">
                    <h1>this is loctio{name}</h1>
                </div>
            </div>

            
    );
};

export default Loction;