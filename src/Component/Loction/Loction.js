import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./loction.css"
import Data from "../Data/data.json"


const Loction = () => {
    const [loc, setLoc] = useState({ Form: '', To: '' });

    const { name } = useParams();
    const info = Data.find(info => info.name === name)
    const { photo, passenger, price, map } = info



    const handlesarch = (e) => {
        if (e.target.name === "Form") {
            const Form = e.target.value
            const adder = { ...loc, Form }
            setLoc(adder)

        }
        if (e.target.name === "To") {
            const To = e.target.value

            const adder = { ...loc, To }
            setLoc(adder)

        }
    }


    const hendelforam = (e) => {
        e.preventDefault()

    }

    return (

        <div className="mainloc">

            <div className="serchloc">
                <form onBlur={hendelforam}>
                    <h3>From</h3>
                    <input type="text" name="Form" id="" placeholder="set loction" required onBlur={handlesarch} />
                    <br />
                    <h3>To</h3>
                    <input type="text" name="To" id="" placeholder="set loction where you will go " required onBlur={handlesarch} />
                    <br />
                    <input type="submit" value="search" />
                </form>
                <div>
                    <img src={map} alt=""/>
                </div>

  
            </div>



            <div className="info">
                <div className="dis">
                    <h3>From {loc.Form} </h3>
                    <h3>To {loc.To}</h3>
                </div>
                <div className="rideInfo">
                    <span>{name}</span>
                    <span>  <img src={photo} alt="" /></span>
                    <span>{passenger}</span>
                    <span>${price}</span></div>

                <div className="rideInfo"><span>{name}</span>
                    <span>  <img src={photo} alt="" /></span>
                    <span>{passenger}</span>
                    <span>${price}</span></div>

                <div className="rideInfo"><span>{name}</span>
                    <span>  <img src={photo} alt="" /></span>
                    <span>{passenger}</span>
                    <span>${price}</span>
                </div>
            </div>
           
        </div>


    );
};


export default Loction;