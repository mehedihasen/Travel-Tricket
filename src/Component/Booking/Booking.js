import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./booking.css"
import data from "../Data/data.json"



const Booking = () => {

  const [card, setCard] = useState([])
  useEffect(()=>{
    setCard(data)
  }, [])
    return (
      <div className="main">
      
        {
          card.map(card=><div className="card" >
          <h2> {card.name}</h2>
          <img src={card.photo} alt=""/>
          <Link to ={`/loction/${card.name}`} className="book"
          style={{textDecoration: "none"}}
          >Booking</Link>
        </div>)
        }
         
      </div>

    )
};

export default Booking;