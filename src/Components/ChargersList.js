// import './Css/ChargersList.css';
import {useState} from 'react'
import { Link } from 'react-router-dom'


const ChargersList = ({chargers, selectedModel}) => {


    return ( 
        <>
            {chargers.map(charger =>(
                <div className="vehicle__container charger__container" key={charger.id} id={charger.id}>
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
                            <h2 className="h2__text left black_font">{charger.chargerName}</h2>
                            <br/>
                            <div><Link className="btn btn__primary general_shadow" to={`/sha7en/Chargers/${charger.id}`} charger = {charger}>View Product</Link></div>
                        <br/>          
                        <p className="p__text left black_font"> 
                        {charger.description}
                        </p>
                    </div>
                </div>
            ))}
        </>
     );
}
 
export default ChargersList;