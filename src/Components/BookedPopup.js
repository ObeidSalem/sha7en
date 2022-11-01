import React from 'react'
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCheckCircle } from "react-icons/ai";


import "./Css/Popup.css"

const BookedPopup = (props) => {


    const [targetBtn, setTargetBtn] = useState()
    const [modelsBtnPopUp, setModelsBtnPopUp] = useState(false)


    return (props.trigger) ? (
        <div className="popup" >
            <div className="popup__container">
                {/* <button onClick={() => props.setTrigger(false)} className="close__button">X</button> */}
                {props.children}
                <div className="center">
                    <AiOutlineCheckCircle className="AiOutlineCheckCircle " />
                </div>
                <br></br>
                <h2 className="h2__text center">
                    Your Booking has been Received
                </h2>
                <br />
                <h3 className="unbold h3__text center">
                    Sha7en team will contact you shortly.
                </h3>

                <Link to="/sha7en/" id="buy_a_charger" >
                    <div className="popup__is__charger__btn__container center">
                        <button
                            className="is__charger__btn btn btn__primary general_shadow"
                            onClick={() => props.setTrigger(false)}
                        >
                            Back to the Home Page
                        </button>
                    </div>
                </Link>

            </div>
        </div>
    ) : "";
}

export default BookedPopup
