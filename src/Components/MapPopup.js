import React from 'react'
import { motion } from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import MapContainer from '../Components/MapContainer'
import "./Css/Popup.css"

const MapPopup = (props) => {

    const [targetBtn, setTargetBtn] = useState()
    const [popUp2, setPopUp2] = useState(false)

    return ( props.trigger) ?  (
        <div className="popup">
            <div className="popup__container left" style={{ height: '60vh', width: '50%' }} >
                <button onClick={() => props.setTrigger(false)} className="close__button">X</button>
                { props.children }
                <br/>
                <MapContainer latitude={props.latitude} longitude={props.longitude}/>
                
            </div>
        </div>
    ) : "";

}

export default MapPopup;
