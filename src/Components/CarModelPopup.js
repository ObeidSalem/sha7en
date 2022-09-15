import React from 'react'
import {motion} from 'framer-motion';
import { useParams } from 'react-router'
import {useRef, useEffect, useState} from 'react'

import "./Css/Popup.css"

const CarModelPopup = (props) => {
    console.log(props)
    // const [models1, setModels] = useState(props.vehicle.models)
    const [width, setWidth] = useState(200);
    const carousel = useRef();


    const handleWidth = () => {
        console.log(carousel.current.scrollwidth,  carousel.current.offsetWidth);
        setWidth(carousel.current.scrollwidth - carousel.current.offsetWidth);
    }

    // useEffect(() => {
    //     window.addEventListener('resize', handleWidth);
    //     console.log(carousel.current.scrollwidth)
    // }, []); 

    return ( props.trigger) ?  ( 
        <div className="popup" >
            <div className="popup__container left">
                <div className="popup__title">
                    <div>
                        <h2>{props.vehicle.brand}</h2>
                        <br />
                        <p className="blue_font">Choose the Vehicle Model</p>
                    </div>
                    <img className="popup__title__image" 
                            src={props.vehicle.image}
                            onError={(e)=>{e.target.onerror = null; e.target.src="/images/vehicle_cover_alt.jpg"}}
                    /> 
                </div>
                
                <hr></hr>
                <div className="popup__model__container">
                    {/* <h5 className="general_shadow white_bg">(((</h5> */}
                        <motion.div className="carousel">
                            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="inner__carousel">
                                {props.vehicle.models.map((model, i) =>{
                                return (
                                    <motion.div key={i}>
                                    <img className="popup__model__image" 
                                        src={model.image}
                                        onError={(e)=>{e.target.onerror = null; e.target.src="/images/vehicle_cover_alt.jpg"}}
                                        />
                                    <h5 className="popup__model general_shadow">{model.modelName}</h5> 
                                    </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    {/* <h5 className="general_shadow white_bg">)))</h5> */}
                </div>
                <br></br>
                <button onClick={() => props.setTrigger(false)} className="close__button">CANCEL</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default CarModelPopup
