import React from 'react'
import {motion} from 'framer-motion';
import { useParams } from 'react-router'
import {useRef, useEffect, useState} from 'react'

import "./Css/Popup.css"

const CarModelPopup = (props) => {
    // console.log(props)
    // const [models1, setModels] = useState(props.vehicle.models)
    
    const [selectedModel, setSelectedModel] = useState();
    const [width, setWidth] = useState(600);
    const carousel = useRef();

    useEffect(() => {
        // console.log(carousel.current.scrollwidth,  carousel.current.offsetWidth);
 
        // setWidth(carousel.current.scrollwidth - carousel.current.offsetWidth);
    }, []); 

    const Years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012];

    function getManufactureYears() {
        console.log("have been called");
        Years = props.vehicle.models.filter(function (model) {
            // console.log(model);
            return model.modelName === "Model x";
    }).map(function (model) {
        console.log(model.productionYear)

        return model.productionYear;
    })
    console.log(Years);

    }
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
                <br></br>
                <hr></hr>
                <br></br>
                <div className="popup__model__container">
                    {/* <h5 className="general_shadow white_bg">(((</h5> */}
                        <motion.div ref={carousel} className="carousel">
                            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: "grabbing"}} className="inner__carousel">
                                {props.vehicle.models.map((model, i) =>{
                                return (
                                    <motion.div 
                                        key={model.modelName}
                                        onClick={(e) => {
                                            // console.log(e);
                                            // console.log(e.target.outerText);
                                            setSelectedModel(e.target.outerText)
                                        }}
                                        >
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
                {selectedModel ? 
                <motion.div className="">
                    <h2>Vehicle Model</h2>
                    <div className="popup__model__container">
                    <motion.div ref={carousel} className="carousel">
                            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: "grabbing"}} className="inner__carousel">
                                {Years.map((year) =>{
                                    return (
                                        <motion.div >
                                            <h5 className="popup__year general_shadow">{year}</h5> 
                                            <br />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
                : "" }
                <br></br>
                <button onClick={() => props.setTrigger(false)} className="close__button">CANCEL</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default CarModelPopup
