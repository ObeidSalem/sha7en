// import './Css/HomeVehiclesList.css';
import CarModelPopup from './CarModelPopup';
import {useState} from 'react'


const HomeVehiclesList = ({vehicles}) => {

    const [targetBtn, setTargetBtn] = useState()
    const [modelsBtnPopUp, setModelsBtnPopUp] = useState(false)

    return ( 
        <>
            {vehicles.map(vehicle =>(
                <div className="vehicle__container" key={vehicle.id} id={vehicle.id}>
                    <div className="vehicle__content"
                        onClick={(()=>{
                            setTargetBtn(vehicle); 
                            setModelsBtnPopUp(true)
                        })} 
                    >
                        <img className="vehicle__image" 
                            src={vehicle.image}
                            onError={(e)=>{e.target.onerror = null; e.target.src="/images/vehicle_cover_alt.jpg"}}
                        />                        
                        <h2 className="left black_font">{vehicle.brand}</h2>
                        <h3 className="left black_font">
                        {vehicle.details}
                        </h3>
                    </div>
                    <CarModelPopup 
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