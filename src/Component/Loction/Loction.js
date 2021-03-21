import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./loction.css"
import Data from "../Data/data.json"

const Loction = () => {
    const [loc, setLoc] = useState({});

    const { name } = useParams();
    const info = Data.find(info => info.name === name)
    const { photo, passenger, price } = info
    // setLoc(info)
    console.log(info);



    const handlesarch = (e) => {
        setLoc(e.target.name = e.target.value)
    }
    console.log(loc);


    const hendelforam = (e) => {
        e.preventDefault()

    }

    return (

        <div className="mainloc">

            <div className="serchloc">
                <form onBlur={hendelforam}>
                    <h3>From</h3>
                    <input type="text" name="from" id="" placeholder="set loction" required onBlur={handlesarch} />
                    <br />
                    <h3>To</h3>
                    <input type="text" name="to" id="" placeholder="set loction where you will go " required onBlur={handlesarch} />
                    <br />
                    <input type="submit" value="search" />
                </form>
            </div>



            <div className="info">
                <div className="dis">
                    <h3>From</h3>
                    <h3>To</h3>
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