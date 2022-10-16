// import './Css/Cards.css';
import HomeVehiclesList from '../Components/HomeVehiclesList';
import React from 'react'


const Cards = ({vehicles}) => {
    return ( 
        <div className="vehicles__container">
            <HomeVehiclesList
                vehicles={vehicles}
            />
        </div>
     );
}
 
export default Cards;