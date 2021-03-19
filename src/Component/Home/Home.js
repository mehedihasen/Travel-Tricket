import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./home.css"
import Bike from '../../Image/Bike.png';
import Bus from '../../Image/bus1.png';
import Metro from '../../Image/imetro.jpg';
import Ariplen from '../../Image/airplane.png';
import { contextSher } from '../../App';
import Booking from '../Booking/Booking';

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
                    <Link className='navlink log' to="/LogIn">LogIn</Link></div>

            </div>
            <div className="images">
                <div className="card">
                    <img src={Bike} alt="" />
                    <Link className='button' to="/Booking">Booking</Link>
                    
                </div>

                <div className="card">

                    <img src={Bus} alt="" />
                   <Link className='button' to="/Booking">Booking</Link>
                    </div>
                <div className="card">

                    <img src={Ariplen} alt="" />
                    <Link className='button' to="/Booking">Booking</Link>
                   
                </div>
                <div className="card">
                    <img src={Metro} alt="" />
                 <Link className='button' to="/Booking">Booking</Link>
                </div>


            </div>

        </div>
    );
};

export default Home;