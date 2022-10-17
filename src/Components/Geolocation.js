import './Css/Summary.css';
import React, {useState,} from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format';
import GoogleMapReact from 'google-map-react';


const Geolocation = () => {


    return ( 
        <div className="flex input__container">
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                    defaultCenter={{lat:4.352130,lng:50.845926}}
                    defaultZoom={9}
                >
                    {/* <Geolocation
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                    /> */}
                </GoogleMapReact>
            </div>
            
        </div>
    );
}
 
export default Geolocation;