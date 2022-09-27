import React from 'react'
import {motion} from 'framer-motion';
import { useParams } from 'react-router'
import {useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import "./Css/Popup.css"

const CarModelPopup = (props) => {
    // console.log(props)
    // const [models1, setModels] = useState(props.vehicle.vehModels)
    
    const [selectedModel, setSelectedModel] = useState();
    const [selectedYear, setSelectedYear] = useState();

    const [width, setWidth] = useState(600);
    const carousel = useRef();

    useEffect(() => {
        // console.log(carousel.current.scrollwidth,  carousel.current.offsetWidth);
 
        // setWidth(carousel.current.scrollwidth - carousel.current.offsetWidth);
    }, []); 

    const Years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012];

    function getManufactureYears() {
        console.log("have been called");
        Years = props.vehicle.vehModels.filter(function (model) {
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
                <button onClick={() => props.setTrigger(false)} className="close__button">X</button>
                { props.children }
                <br></br>

                <div className="popup__title">
                    <div>
                        <h2>{props.vehicle.vehBrand}</h2>
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
                        <motion.div ref={carousel} className="carousel">
                            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: "grabbing"}} className="inner__carousel">
                                {props.vehicle.vehModels.map((model, i) =>{
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
                                        <motion.div 
                                        onClick={(e) => {
                                            // console.log(e);
                                            // console.log(e.target.outerText);
                                            setSelectedYear(e.target.outerText)
                                        }}
                                        >
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
                {selectedModel && selectedYear ? 
                <motion.div className="">
                    <br/>
                    <div className="popup__model__container">
                        <button className="btn btn__secondary general_shadow" onClick={() => props.setTrigger(false)} >Cancel</button>
                        <Link className="btn btn__primary general_shadow" to="/sha7en/Chargers" modelName={selectedModel}>Next</Link>

                    </div>
                </motion.div>
                : "" }
            </div>
        </div>
    ) : "";
}

export default CarModelPopup
