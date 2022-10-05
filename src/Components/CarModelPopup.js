import React from 'react'
import {motion} from 'framer-motion';
import { useParams } from 'react-router'
import {useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import YearsCarousel from '../Components/YearsCarousel';
import Popup2 from '../Components/Popup2';

import "./Css/Popup.css"

const CarModelPopup = (props) => {
    // console.log(props)
    // const [models1, setModels] = useState(props.vehicle.vehModels)

    const [targetBtn, setTargetBtn] = useState()
    const [popUp2, setPopUp2] = useState(false)

    const [selectedModel, setSelectedModel] = useState();
    const [VIN, setVIN] = useState("");

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

                {/* <div className="popup__title">
                    <div>
                        <h3>{props.brand_name}</h3>
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
                <br></br> */}
                {popUp2? 
                    <YearsCarousel selectedModel = {selectedModel} Years={Years} Colors={Colors} />
                :
                <>
                    <h3 className="unbold">Vehicle Model: {selectedModel}</h3>
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
                    {props.brand_name==="Tesla"?
                        <div className="flex input__container">
                            <label className="">VIN/RM No. </label>
                            <input
                                className="input__style"   
                                placeholder="VIN / RM No. "
                                type="text"
                                value={VIN}
                                onChange={(e) => {
                                    setVIN(e.target.value)

                                }}
                                required 
                            />
                        </div>
                    :""}
                    <br/>

                </>
                }
                {popUp2 ? 
                <motion.div className="">
                    <div className="popup__model__container">
                        <button className="btn btn__secondary general_shadow" onClick={() => setPopUp2(false)} >Cancel</button>
                        <Link to="/sha7en/Chargers" modelName={selectedModel}>
                            <button className="btn btn__primary general_shadow" 
                            //     onClick={()=>{
                            //         setTargetBtn(vehicle); 
                            //         setPopUp2(true)
                            //     }
                            // }
                            >Next</button>
                        </Link>
                    </div>
                </motion.div>
                :                
                <motion.div className="">
                <div className="popup__model__container">
                    <button className="btn btn__secondary general_shadow" onClick={() => props.setTrigger(false)} >Cancel</button>
                    {selectedModel ? 
                        <button className="btn btn__primary general_shadow" 
                            onClick={()=>{
                                setPopUp2(true)
                            }
                        }
                        >Next</button>
                    : ""}
                </div>
            </motion.div>}
            </div>
        </div>
    ) : "";
}

export default CarModelPopup
