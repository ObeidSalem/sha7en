import './Css/Home.css';
import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ChargersCards from './ChargersCards';


const Chargers = (props) => {

    const stateBrandVal = useLocation().state.stateBrand;
    const stateModelVal = useLocation().state.stateModel;
    const stateVehicleModelVal = useLocation().state.stateVehicleModel;
    const stateModel = useLocation().state.stateModel;
    const stateBrand = useLocation().state.stateBrand;
    const stateProductionYear = useLocation().state.stateProductionYear;
    const stateColor = useLocation().state.stateColor;
    const stateServiceType = useLocation().state.stateServiceType;
    const stateChargerType = useLocation().state.stateChargerType;

    // console.log(props)
    // console.log(stateModelVal, stateVehicleModelVal)

    const [model, setModel] = useState(props.selectedModel)

    return ( 
        <>
            <div className="home_vehicles page_padding text_align_left">
                {stateBrandVal && stateModelVal?
                    <h1 className="black_font vehicles_title">{stateBrandVal} {stateModelVal} Compatible Chargers</h1>
                :
                    <h1 className="black_font vehicles_title">Chargers</h1>
                }
                <div className="vehicles_container">
                    <ChargersCards 
                        vehicles={props.vehicles}
                        fixedFees={props.fixedFees}
                        chargers={props.chargers}
                        model={props.selectedModel}

                        stateProps= {{
                            stateModel: stateModel, 
                            stateBrand: stateBrand,
                            stateProductionYear: stateProductionYear,
                            stateColor:stateColor,
                            stateServiceType:stateServiceType,
                            stateChargerType:stateChargerType,
                        }} 

                        stateVehicleModelVal={stateVehicleModelVal}
                    />
                </div>
                <div className="vehicles__container">
                
                </div>
            </div>
        </>
     );
}
 
export default Chargers;