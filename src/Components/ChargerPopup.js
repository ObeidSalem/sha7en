import React from 'react'
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


import "./Css/Popup.css"

const ChargerPopup = (props) => {

    
    const [targetBtn, setTargetBtn] = useState()
    const [modelsBtnPopUp, setModelsBtnPopUp] = useState(false)

    
    return ( props.trigger) ?  ( 
        <div className="popup" >
            <div className="popup__container">
                <button onClick={() => props.setTrigger(false)} className="close__button">X</button>
                { props.children }
                <br></br>
                <h2 className="h2__text center">
                    Do you already have a charger?!
                </h2>
                <br/>
                <h3 className="unbold h3__text center">
                    We in the Sha7en provide a charger installation service in all United Arab Emirates cities.
                </h3>
                <div className="popup__is__charger__btn__container center">
                    <button 
                        className="is__charger__btn btn btn__primary general_shadow" 
                        onClick={() => props.setTrigger(false)}
                    >No, I would like to buy a charger
                    </button>
                    <br/>
                    <Link to="/sha7en/Chargers/000" id="buy_a_charger" >Yes, book Installation</Link>
                </div>

            </div>
        </div>
    ) : "";
}

export default ChargerPopup
