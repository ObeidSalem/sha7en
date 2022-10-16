// import './Css/Cards.css';
import ChargersList from '../Components/ChargersList';
import {useLocation} from 'react-router-dom'
import React, {useEffect, useState} from 'react'



const ChargersCards = (props) => {

    const stateVehicleModelVal = useLocation().state.stateVehicleModel;
    
    let compatible = []

    props.chargers.filter(charger => {
        
        for (let i = 0; i < props.chargers.length; i++) {
            if (charger.charger_id == stateVehicleModelVal[i]){
                compatible.push(charger)
            }
        }

    })


    return ( 
        <div className="vehicles__container">
            <ChargersList
                fixedFees={props.fixedFees}
                model={props.selectedModel}
                chargers={compatible}
            div/>
        </div>
     );
}
 
export default ChargersCards;