import {motion} from 'framer-motion';
import React, {useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


const YearsCarousel = ({vehicleModel, brand_name, selectedModel, Years, Colors, setPopUp2, popUp2}) => {
    // const [selectedModel, setSelectedModel] = useState();
    const [selectedYear, setSelectedYear] = useState();
    const [selectedColor, setSelectedColor] = useState();
    const [chargerType, setChargerType] = useState();
    const [serviceOption, setServiceOption] = useState();
    const [isOnlyInstall, setIsOnlyInstall] = useState(false)

    console.log(vehicleModel)

    const [width, setWidth] = useState(600);
    const carousel = useRef();

    //to style charger types
    const [blueRadio1, setBlueRadio1] = useState("");
    const [blueRadio2, setBlueRadio2] = useState("");
    const [blueRadio3, setBlueRadio3] = useState("");
    const [blueRadio4, setBlueRadio4] = useState("");    
    const [blueRadio5, setBlueRadio5] = useState("");
    const [blueRadio6, setBlueRadio6] = useState("");

    //to style models production years
    const [isYearRadio, setIsYearRadio] = useState(false);
    const [isColorRadio, setIsColorRadio] = useState(false);
    const [selectedYearIndex, setSelectedYearIndex] = useState();
    const [selectedColorIndex, setSelectedColorIndex] = useState();



    useEffect(() => {
        // console.log(carousel.current.scrollwidth,  carousel.current.offsetWidth);
 
        // setWidth(carousel.current.scrollwidth - carousel.current.offsetWidth);

        // console.log(selectedModel);
        // getManufactureYears();

    }, []); 

    console.log(Colors);
    console.log(Colors[0].color_code);

    function handelClickSelectedYear(e,i) {

        setSelectedYear(e.target.outerText)
        setIsYearRadio(false);
        setIsYearRadio(prevState => ({
            ...isYearRadio,
            [selectedYearIndex]: false[selectedYearIndex],
            [i]: !prevState[i],
        }))         
    }

    function handelClickSelectedColor(e,i) {

        setSelectedColor(e.target.outerText)
        setIsColorRadio(false);
        setIsColorRadio(prevState => ({
            ...isColorRadio,
            [selectedColorIndex]: false[selectedColorIndex],
            [i]: !prevState[i],
        }))         
    }
    return ( 
        <>
            {/* <motion.div ref={carousel} className="carousel">
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
            </motion.div> */}


            <div className="flex input__container">
                <h3 className="unbold">Charger Port Type: </h3>
                    <div className="flex inner__input__container ">
                        <input 
                            className={`btn_radio btn btn__secondary input__style margin_right gray_font text_align_left p__text ${blueRadio1}`}
                            type="button" 
                            onClick={(e) => {
                                setBlueRadio1("blue_Radio")
                                setBlueRadio2("")
                                setBlueRadio3("")
                                setBlueRadio4("")
                                setChargerType(e.target.value)
                            }} 
                            value="Type 1"
                        />
                        <input 
                            className={`btn_radio btn btn__secondary input__style margin_right gray_font text_align_left p__text ${blueRadio2}`}
                            type="button" 
                            onClick={(e) => { 
                                setBlueRadio1("")
                                setBlueRadio2("blue_Radio")
                                setBlueRadio3("")
                                setBlueRadio4("")
                                setChargerType(e.target.value)
                            }} 
                            value="Type 2"
                        />
                        <input 
                            className={`btn_radio btn btn__secondary input__style margin_right gray_font text_align_left p__text ${blueRadio3}`}
                            type="button" 
                            onClick={(e) => {
                                setBlueRadio1("")
                                setBlueRadio2("")
                                setBlueRadio3("blue_Radio")
                                setBlueRadio4("")
                                setChargerType(e.target.value)
                            }} 
                            value="GB/T"
                        />
                        <input 
                            className={`btn_radio btn btn__secondary input__style margin_right gray_font text_align_left p__text ${blueRadio4}`}
                            type="button" 
                            onClick={(e) => {
                                setBlueRadio1("")
                                setBlueRadio2("")
                                setBlueRadio3("")
                                setBlueRadio4("blue_Radio")
                                setChargerType(e.target.value)
                            }} 
                            value="CCS"
                        />
                    </div>
                </div>

                <div className="flex input__container">
                <br></br>
                <h3 className="unbold">Service Option </h3>
                    <div className="flex inner__input__container ">
                        <input 
                            className={`btn_radio btn btn__secondary input__style margin_right gray_font text_align_left p__text ${blueRadio5}`}
                            type="button" 
                            onClick={(e) => {
                                setBlueRadio5("blue_Radio")
                                setBlueRadio6("")
                                setServiceOption(e.target.value)
                                setIsOnlyInstall(true)
                            }} 
                            value="Install Charger"
                        />
                        <input 
                            className={`btn_radio btn btn__secondary input__style margin_right gray_font text_align_left p__text ${blueRadio6}`}
                            type="button" 
                            onClick={(e) => { 
                                setBlueRadio5("")
                                setBlueRadio6("blue_Radio")
                                setServiceOption(e.target.value)
                                setIsOnlyInstall(false)
                            }} 
                            value="Purchase & Install Charger"
                        />
                    
                    </div>
                </div>
                <br></br>

                <motion.div className="">
                    <h3 className="unbold">Model Production</h3>
                    <div className="popup__model__container">
                    <motion.div ref={carousel} className="carousel">
                            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: "grabbing"}} className="inner__carousel">
                                {Years.map((year,i) =>{
                                    return (
                                        <motion.div className="input__container"
                                        // key={year} 
                                        onClick={(e) => {
                                            handelClickSelectedYear(e,i);
                                            setSelectedYearIndex(i)
                                        }}
                                        >
                                            <h5 
                                                className="popup__year input__style "
                                                style={{
                                                    backgroundColor: isYearRadio[`${i}`] 
                                                      ? "var(--primeblue)" 
                                                      : "var(--white)",
                                                      color: isYearRadio[`${i}`] 
                                                      ? "var(--white)" 
                                                      : "initial"
                                                }}
                                            >{year}</h5> 
                                            <br />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div className="">
                    <h3 className="unbold">Vehicle Color: {selectedColor}</h3>
                    <div className="popup__model__container">
                    <motion.div ref={carousel} className="carousel">
                            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: "grabbing"}} className="inner__carousel">
                                {Colors.map((color, i) =>{
                                    return (
                                        <motion.div 
                                        key={i}
                                        onClick={(e) => {
                                            setSelectedColor(Colors[i].color_name);
                                            handelClickSelectedColor(e,i);
                                            setSelectedColorIndex(i)

                                        }}
                                        >
                                            <div 
                                                className="popup__color general_shadow" 
                                                style={{
                                                    backgroundColor: `${Colors[i].color_code}`
                                                ,}}
                                            ></div> 
                                            <div 
                                                className="popup__color__selected"
                                                style={{

                                                    visibility: isColorRadio[`${i}`] 
                                                    ? "visible" 
                                                    : "",
                                                }}
                                            >
                                            </div> 
                                            <br />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>    
                {isOnlyInstall ? 
                <motion.div className="">
                    <div className="popup__setPopUp2model__container">
                        <div className="popup__model__container">
                            <button className="btn btn__secondary general_shadow" 
                            onClick={() => setPopUp2(false)} 
                            >Back</button>
                            {/* {isOnlyInstall?  */}
                            <Link to="/sha7en/Chargers/000" modelName={selectedModel}>

                                <button className="btn btn__primary general_shadow" 
                                    onClick={()=>{
                                        // setTargetBtn(vehicle); 
                                        setPopUp2(false)
                                    }
                                }
                                >Next</button>
                            </Link>
                            {/* : ""} */}
                        </div>
                    </div>
                </motion.div>
                :                
                <motion.div className="">
                    <div className="popup__model__container">
                    <button className="btn btn__secondary general_shadow" 
                    onClick={() => setPopUp2(false)} 
                    >Back</button>
                    {selectedModel ? 
                        <Link 
                            state= {{
                                stateModel: selectedModel, 
                                stateBrand: brand_name,
                                stateVehicleModel: vehicleModel,
                            }} 
                            to="/sha7en/Chargers" 
                        >
                            <button className="btn btn__primary general_shadow" 
                                onClick={()=>{
                                    setPopUp2(false)
                                }
                            }
                            >Next</button>
                        </Link>
                    : ""}
                </div>
            </motion.div>}       
        </>
     );
}
 
export default YearsCarousel;