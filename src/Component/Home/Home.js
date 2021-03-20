import React, { useContext, } from 'react';
import "./home.css"
import { contextSher } from '../../App';
import Booking from '../Booking/Booking';
import { Link } from 'react-router-dom';



const Home = () => {

    const [logInfo, setLogInfo] = useContext(contextSher)
   
    return (

        <div className='homeMaim'>

            <div className="nav">
                <div className="name">
                    <h2>Travel Ticket</h2>
                </div>
                <div className="section">
                    <Link className='navlink' to="/Home">Home</Link>
                    <Link className='navlink' to="">Destens</Link>
                    <Link className='navlink' to="">contuc</Link>
                    <Link className='navlink' to="">Blog</Link>
                    <Link className='navlink log' to="/LogIn">LogIn</Link>
                </div>

            
              

                
            </div>   
              
             
            <div>
            <Booking></Booking>
            </div> 
        </div>
    
    );
};

export default Home;