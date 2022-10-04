import './Css/Summary.css';
import {useState, useRef} from 'react'
import { Link, useParams } from 'react-router-dom'


const Checkout = ({chargers}) => {
    
    const { id } = useParams();

    const chargerArr = chargers.filter(charger => {
        return charger.charger_id === id;
    });

    const charger = chargerArr[0];

    console.log(charger)

    return ( 
        <div className=" ">
            <div className="order__summary__header ">
                <h3>Order Checkout</h3>
                <hr className="margin__top "/>
            </div>
            <div className="summary__header__container ">
                <img className="summary__header__image " 
                        src={charger.chargerImage}
                        onError={(e)=>{e.target.onerror = null; e.target.src="/images/vehicle_cover_alt.jpg"}}
                /> 
                <div className="summary__header__content ">
                    <h1 className="black_font h1__text">{charger.charBrand}</h1>
                    <h2 className="black_font h2__text">{charger.chargerName}</h2>
                    <br/>
                    <p className="black_font p__text">{charger.description}</p>

                </div>
            </div> 

            <div className="summary__content">
                <div className="policy__container">
                    <div className="fit__content">
                        <h3>Policy & Guidelines</h3>
                        <hr className="margin__top "/>
                    </div>
                    <p className="black_font p__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
                <div className="left fit__content checkout charger__cable__container general_shadow">
                    <h3>Checkout</h3>
                    <hr className="margin__top "/>
                    <br/>
                    <h3 className="unbold ">User Checkout</h3>
                    <h4 className="unbold ">Obeid Salem</h4>
                    <br/>
                    <h3 className="unbold ">Shipping Address</h3>
                    <h4 className="unbold ">Mohammed Bin Zaid City, street no 34, 35123, Abu Dhabi United Arab Emarites. </h4>
                    <br/>
                    <h3 className="unbold ">Billing Address</h3>
                    <h4 className="unbold ">Mohammed Bin Zaid City, street no 34, 35123, Abu Dhabi United Arab Emarites. </h4>
                    <hr className="margin__top "/>
                    
                    <br/>
                    <div className="total">
                        <h4 className="unbold ">Site Visit </h4>
                        <h4 className="unbold ">AED50</h4>
                    </div>
                    <div className="total margin__top">
                        <h3 className="unbold ">Total</h3>
                        <h3 className="unbold ">AED50</h3>
                    </div>
                    {/* <Link to={`/sha7en/login`}> */}
                        <button id="btn__checkout" className="btn btn__primary margin__top" 
                        onClick={() => {
                        }} 
                        >Online Banking</button>
                    {/* </Link> */}
                        <button id="btn__checkout" className="btn btn__secondary margin__top" 
                        onClick={() => {
                        }} 
                        >Apple Pay</button>
                </div>
            </div>            
        </div>
     );
}
 
export default Checkout;