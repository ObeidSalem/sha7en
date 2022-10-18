import React from 'react'
import { motion } from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import YearsCarousel from '../Components/YearsCarousel';

import "./Css/Popup.css"

const CarModelPopup = (props) => {
    // console.log(props)
    // const [models1, setModels] = useState(props.vehicle.vehModels)

    const [targetBtn, setTargetBtn] = useState()
    const [popUp2, setPopUp2] = useState(false)

    const [showNext, setShowNext] = useState(false);
    const [selectedModel, setSelectedModel] = useState("");
    const [selectedModelIndex, setSelectedModelIndex] = useState();
    const [VIN, setVIN] = useState("");

    const [width, setWidth] = useState(600);
    const carousel = useRef();

    useEffect(() => {
        // console.log(carousel.current.scrollwidth,  carousel.current.offsetWidth);
        // setWidth(carousel.current.scrollwidth - carousel.current.offsetWidth);
        // handelClickSelectedModel()

    },[]); 


    console.log("selectedModel", selectedModel)
    const [vehicleModel, setVehicleModel] = useState([123]);
    // const [compatibleChargers, setCompatibleChargers] = useState([123]);
    const [Years, setYears] = useState([2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012]);
    const [Colors, setColors] = useState([{color_name:'Green', color_code:'#00ff00'},{color_name:'Black', color_code:'#000000'}]);
    
    const [isBlueRadio, setIsBlueRadio] = useState(false);

    function getManufactureYears(selectedModel) {

        console.log("have been called");
        const modelFilterArr = props.vehicle.vehModels.filter(function (model) {
            return model.modelName == selectedModel;
        });
        const modelFilter = modelFilterArr[0];

        console.log(modelFilter);

        let VehicleModel = []
        try { 
            VehicleModel = modelFilter.compatibleChargers;
            setShowNext(true)
        }catch(err){
            console.log(err.message);
        }

        let productionYears
        try { 
            productionYears = modelFilter.productionYear;
        }catch(err){
            console.log(err.message);
        }

        let modelColors
        try { 
            modelColors = modelFilter.colors;
        }catch(err){
            console.log(err.message);
        }

        console.log(productionYears, modelColors, VehicleModel);

        setVehicleModel(VehicleModel);
        setYears(productionYears)
        setColors(modelColors)

        return productionYears;

    }

    function handelClickSelectedModel(e,i) {
        // console.log(i);
        // console.log(selectedModelIndex);
        // console.log(e);
        // console.log(e.target.outerText);
        setSelectedModel(e.target.outerText)
        setYears(getManufactureYears(selectedModel))
        setIsBlueRadio(false);
        setIsBlueRadio(prevState => ({
            ...isBlueRadio,
            [selectedModelIndex]: false[selectedModelIndex],
            [i]: !prevState[i],
        }))         
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
                    <YearsCarousel brand_name={props.brand_name} selectedModel = {selectedModel} popUp2={popUp2} setPopUp2={setPopUp2} vehicleModel={vehicleModel} Years={Years} Colors={Colors} />
                :
                <>
                    <h3 className="unbold">Vehicle Model</h3>
                    <div className="popup__model__container">
                        <motion.div ref={carousel} className="carousel">
                            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: "grabbing"}} className="inner__carousel">
                                {props.vehicle.vehModels.map((model, i) =>{
                                    // console.log(model.modelName)
                                    // if (selectedModel==""){
                                    //     setSelectedModel(model.modelName)
                                    // }
                                return (
                                    <motion.div 
                                        key={i}
                                        onClick={(e) => {
                                            handelClickSelectedModel(e,i);
                                            setSelectedModelIndex(i)
                                        }}
                                        >
                                        <img className='popup__model__image'
                                            src={model.image}
                                            onError={(e)=>{e.target.onerror = null; e.target.src="/images/vehicle_cover_alt.jpg"}}
                                            />
                                        <h5 
                                            className={`popup__model general_shadow`} 
                                            style={{
                                                backgroundColor: isBlueRadio[`${i}`] 
                                                  ? "var(--primeblue)" 
                                                  : "var(--white)",
                                                  color: isBlueRadio[`${i}`] 
                                                  ? "var(--white)" 
                                                  : "initial"
                                            }}
                                        >{model.modelName}</h5> 
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
                {popUp2 ? <motion.div className="">
                    
                </motion.div>
                :                
                <motion.div className="">
                <div className="popup__model__container">
                    <button className="btn btn__secondary general_shadow" onClick={() => props.setTrigger(false)} >Cancel</button>
                    {showNext ? 
                        <button className="btn btn__primary general_shadow" 
                            onClick={()=>{
                                setPopUp2(true)
                            }}
                            >Next</button>
                        : ""}
                    </div>
                </motion.div> }
            </div>
        </div>
    ) : "";
}

export default CarModelPopup
