import React, { useContext } from 'react';
import "./home.css"
import Booking from '../Booking/Booking';
import { Link } from 'react-router-dom';
import { contextSher } from '../../App';
import Loction from '../Loction/Loction';



const Home = () => {
    const [logInfo, setLogInfo] = useContext(contextSher);
    console.log(logInfo);
   
    return (

        <div className='homeMaim'>

            <div className="nav">
                <div className="name">
                    <h2>Travel Ticket</h2>
                </div>
                <div className="section">
                    <Link className='navlink' to="/Home">Home</Link>
                    <Link className='navlink' to="loction/Car">Destens</Link>
                    <Link className='navlink' to="/Creatacc">Create account</Link>
                    <Link className='navlink log' to="/LogIn">{logInfo.name? logInfo.name : "login"}</Link>
                </div>
                
            </div>   
               
            <div>

              <Booking/>
            
            </div> 
        </div>
    
    );
};

export default Home;