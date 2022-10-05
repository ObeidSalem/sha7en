import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from 'react'


const YearsCarousel = ({selectedModel, Years, Colors}) => {
    // const [selectedModel, setSelectedModel] = useState();
    const [selectedYear, setSelectedYear] = useState();
    const [selectedColor, setSelectedColor] = useState();
    const [ChargerType, setChargerType] = useState();


    const [width, setWidth] = useState(600);
    const carousel = useRef();

    useEffect(() => {
        // console.log(carousel.current.scrollwidth,  carousel.current.offsetWidth);
 
        // setWidth(carousel.current.scrollwidth - carousel.current.offsetWidth);

        // console.log(selectedModel);
        // getManufactureYears();

    }, []); 

    console.log(Colors);
    console.log(Colors[0].color_code);


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
                    <br></br>
                        <h3 className="unbold">Charger Port Type: {ChargerType} </h3>
                            <div className="flex inner__input__container ">
                                <input 
                                    className="btn_radio btn btn__secondary input__style margin_right gray_font text_align_left p__text"
                                    type="button" 
                                    onClick={(e) => {
                                        setChargerType(e.target.value)
                                    }} 
                                    value="Type 1"
                                />
                                <input 
                                    className="btn_radio btn btn__secondary input__style margin_right gray_font text_align_left p__text"
                                    type="button" 
                                    onClick={(e) => { 
                                        setChargerType(e.target.value)
                                    }} 
                                    value="Type 2"
                                />
                                <input 
                                    className="btn_radio btn btn__secondary input__style margin_right gray_font text_align_left p__text"
                                    type="button" 
                                    onClick={(e) => {
                                        setChargerType(e.target.value)
                                    }} 
                                    value="GB/T"
                                />
                                <input 
                                    className="btn_radio btn btn__secondary input__style margin_right gray_font text_align_left p__text"
                                    type="button" 
                                    onClick={(e) => { 
                                        setChargerType(e.target.value)
                                    }} 
                                    value="CCS"
                                />

                            </div>
                        </div>
                <br></br>
                <motion.div className="">
                    <h3 className="unbold">Model Production {selectedYear}</h3>
                    <div className="popup__model__container">
                    <motion.div ref={carousel} className="carousel">
                            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: "grabbing"}} className="inner__carousel">
                                {Years.map((year) =>{
                                    return (
                                        <motion.div
                                        // key={year} 
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

                <motion.div className="">
                    <h3 className="unbold">Vehicle Color: {selectedColor}</h3>
                    <div className="popup__model__container">
                    <motion.div ref={carousel} className="carousel">
                            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: "grabbing"}} className="inner__carousel">
                                {Colors.map((color, i) =>{
                                    return (
                                        <motion.div 
                                        onClick={(e) => {
                                            // console.log(e);
                                            // console.log(e.target.outerText);
                                            setSelectedColor(Colors[i].color_name)
                                        }}
                                        >
                                            <div className="popup__color general_shadow" style={{
                                                backgroundColor: `${Colors[i].color_code}`
                                            ,}}></div> 
                                            <br />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>                
        </>
     );
}
 
export default YearsCarousel;