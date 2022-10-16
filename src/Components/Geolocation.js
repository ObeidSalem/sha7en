import './Css/Summary.css';
import {useState,} from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format';


const Geolocation = () => {


    return ( 
        <div className="flex input__container">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20604.112517678263!2d101.72699741909003!3d3.231585691051365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc39c1fa44609f%3A0xf306a88aad93a84e!2sAyuman%20Suites!5e0!3m2!1sen!2smy!4v1665494984561!5m2!1sen!2smy" 
                width="600" 
                height="450" 
                // style="border:0;" 
                // allowfullscreen="" 
                loading="lazy" 
                // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            
        </div>
    );
}
 
export default Geolocation;