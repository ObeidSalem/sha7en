// import './Css/ChargersList.css';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ChargerPopup from '../Components/ChargerPopup'
import CurrencyFormat from 'react-currency-format';


const ChargersList = ({chargers, fixedFees, selectedModel}) => {

    
    const [useFixedFees, setFixedFees] = useState(fixedFees)
    
    // //Charger Popup
    // const [isChargerBtnPopUp, setIsChargerBtnPopUp] = useState(false)
    // useEffect(() => {

    //     const timer = setTimeout(() => {
    //       console.log('This will run after 1 second!')
    //       setIsChargerBtnPopUp(true)
    //     }, 2000);
    //     return () => clearTimeout(timer);

    //   }, []);

    console.log(chargers)

    return ( 
        <>
            {chargers.map(charger =>(
                <div className="vehicle__container charger__container" key={charger.charger_id} id={charger.charger_id}>
                    <div className="vehicle__content"
                    >
                    <div className="popup__title">
                        <h2>{charger.charBrand}</h2>
                        
                        <img className="popup__title__image circle" 
                                src={charger.brandImage}
                                onError={(e)=>{e.target.onerror = null; e.target.src="/images/vehicle_cover_alt.jpg"}}
                        /> 
                    </div>
                    <br></br>
                    <br></br>
                        <img className="vehicle__image" 
                            src={charger.chargerImage}
                            onError={(e)=>{e.target.onerror = null; e.target.src="/images/charger.jpg"}}
                        />   
                        <br/>          
                        <div className="popup__title">    
                            <h2 className="h2__text left black_font">{charger.chargerName}</h2>
                            <div>
                                <Link className="btn btn__primary general_shadow" to={`/sha7en/Chargers/${charger.charger_id}`} charger = {charger}>View Product</Link>
                            </div>
                        </div>
                        {/* <br/>    */}
                        <div className="popup__title">    
                            <h3 className="unbold h3__text left black_font">
                                    <CurrencyFormat value={parseInt(charger.charger_price) + parseInt(fixedFees.installation_fee) + parseInt(fixedFees.site_visit_fee)} displayType={'text'} thousandSeparator={true} prefix={'AED '} />
                            </h3>
                        </div>    
                        <br/>   
                        <p className="p__text left black_font"> 
                        {charger.description}
                        </p>
                    </div>
                </div>
            ))}
            {/* <ChargerPopup 
                // brand_name={BrandName}
                // vehicle={targetBtn} 
                trigger={isChargerBtnPopUp} 
                setTrigger={setIsChargerBtnPopUp}>
            </ChargerPopup> */}
        </>
     );
}
 
export default ChargersList;