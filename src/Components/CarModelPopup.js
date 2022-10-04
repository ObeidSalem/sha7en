import React from 'react'
import {motion} from 'framer-motion';
import { useParams } from 'react-router'
import {useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import YearsCarousel from '../Components/YearsCarousel';

import "./Css/Popup.css"

const CarModelPopup = (props) => {
    // console.log(props)
    // const [models1, setModels] = useState(props.vehicle.vehModels)
    
    const [selectedModel, setSelectedModel] = useState();

    const [width, setWidth] = useState(600);
    const carousel = useRef();

    useEffect(() => {
        // console.log(carousel.current.scrollwidth,  carousel.current.offsetWidth);
 
        // setWidth(carousel.current.scrollwidth - carousel.current.offsetWidth);

    },); 


    const [Years, setYears] = useState([2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012]);
    const [Colors, setColors] = useState([{color_name:'Green', color_code:'#00ff00'},{color_name:'Black', color_code:'#000000'}]);


    function getManufactureYears(selectedModel) {

        console.log("have been called");
        const modelFilterArr = props.vehicle.vehModels.filter(function (model) {
            return model.modelName == selectedModel;
        });
        const modelFilter = modelFilterArr[0];

        const productionYears = modelFilter.productionYear;
        const modelColors = modelFilter.colors;

        console.log(productionYears, modelColors);

        setYears(productionYears)
        setColors(modelColors)

        return productionYears;

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
                <h2 className="unbold">Vehicle Model: {selectedModel}</h2>
                <div className="popup__model__container">
                        <motion.div ref={carousel} className="carousel">
                            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: "grabbing"}} className="inner__carousel">
                                {props.vehicle.vehModels.map((model, i) =>{
                                return (
                                    <motion.div 
                                        key={`${props.vehicle.brand_id} ${model.modelName}`}
                                        onClick={(e) => {
                                            // console.log(e);
                                            // console.log(e.target.outerText);
                                            setSelectedModel(e.target.outerText)
                                            setYears(getManufactureYears(selectedModel))

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
                    <YearsCarousel selectedModel = {selectedModel} Years={Years} Colors={Colors} />
                : "" }
                {true ? 
                <motion.div className="">
                    <br/>
                    <div className="popup__model__container">
                        <button className="btn btn__secondary general_shadow" onClick={() => props.setTrigger(false)} >Cancel</button>
                        <Link to="/sha7en/Chargers" modelName={selectedModel}><button className="btn btn__primary general_shadow" >Next</button></Link>

                    </div>
                </motion.div>
                : "" }
            </div>
        </div>
    ) : "";
}

export default CarModelPopup
