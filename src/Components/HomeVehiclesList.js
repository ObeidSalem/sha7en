// import './Css/HomeVehiclesList.css';
import CarModelPopup from './CarModelPopup';
import React, {useState} from 'react'


const HomeVehiclesList = ({vehicles}) => {

    const [targetBtn, setTargetBtn] = useState()
    const [modelsBtnPopUp, setModelsBtnPopUp] = useState(false)
    const [BrandName, setBrandName] = useState("")


    return ( 
        <>
            {vehicles.map(vehicle =>(
                <div className="vehicle__container" key={vehicle.brand_id} id={vehicle.brand_id}>
                    <div className="vehicle__content"
                        onClick={(()=>{
                            setTargetBtn(vehicle); 
                            setModelsBtnPopUp(true)
                            setBrandName(vehicle.brand_name)
                        })} 
                    >
                        <img className="vehicle__image" 
                            src={vehicle.image}
                            onError={(e)=>{e.target.onerror = null; e.target.src="/images/vehicle_cover_alt.jpg"}}
                        />                        
                        <h2 className="h2__text left black_font">{vehicle.brand_name}</h2>
                        {/* <h3 className="h3__text left black_font">
                        {vehicle.details}
                        </h3> */}
                    </div>
                    <CarModelPopup 
                        brand_name={BrandName}
                        vehicle={targetBtn} 
                        trigger={modelsBtnPopUp} 
                        setTrigger={setModelsBtnPopUp}>
                    </CarModelPopup>
                </div>
            ))}
        </>
     );
}
 
export default HomeVehiclesList;