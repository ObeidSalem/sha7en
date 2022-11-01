// import './Css/Cards.css';
import ChargersList from '../Components/ChargersList';
import {useLocation} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';



const ChargersCards = (props) => {

    const userVehicleModel = useSelector(state => state.vehicleModel)
    const stateVehicleModelVal = userVehicleModel.SupportedChargers;
    const stateChargerType = useLocation().state.stateChargerType;

    console.log("stateVehicleModelVal",stateVehicleModelVal)
    console.log("stateChargerType",stateChargerType)

    let compatible = []

    props.chargers.filter(charger => {
        
        console.log("charger",charger)
        for (let i = 0; i < props.chargers.length; i++) {
            if (charger.charger_id == stateVehicleModelVal[i] ){
                compatible.push(charger)
            }
            // if (stateChargerType == charger.supportedPorts[i]){
            //     compatible.push(charger)
            // }
        }

    })


    return ( 
        <div className="vehicles__container">
            <ChargersList
                fixedFees={props.fixedFees}
                model={props.selectedModel}
                chargers={compatible}
                stateProps={props.stateProps}
            div/>
        </div>
     );
}
 
export default ChargersCards;