import './Css/Summary.css';
import React, {useState, useRef} from 'react'
import { Link, useParams, useLocation  } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format';



const Summary = ({Address, chargers, fixedFees}) => {
    
    const { id } = useParams();

    const chargerArr = chargers.filter(charger => {
        return charger.charger_id === id;
    });

    const charger = chargerArr[0];

    const stateAddressVal = useLocation().state.stateAddress;

    console.log(fixedFees.site_visit_fee)
    
    // useEffect(() => {

    //     const timer = setTimeout(() => {
    //       console.log('This will run after 1 second!')
    //       setIsChargerBtnPopUp(true)
    //     }, 2000);
    //     return () => clearTimeout(timer);

    //   }, []);


    return ( 
        // <>
        // yet underdevelopment
        // </>
        <div className=" ">
            <div className="order__summary__header ">
                <h3>Order Summary</h3>
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
                    <h3 className="unbold ">Shipping Address</h3>
                    <h4 className="unbold ">{stateAddressVal}</h4>
                    <hr className="margin__top "/>
                    
                    <br/>
                    <div className="total">
                        <h4 className="unbold ">Site Visit: </h4>
                        <h4 className="unbold ">
                            <CurrencyFormat value={fixedFees.site_visit_fee} displayType={'text'} thousandSeparator={true} prefix={'AED '} />
                        </h4>
                    </div>
                    <div className="total">
                        <h4 className="unbold ">Charger Price: </h4>
                        <h4 className="unbold ">
                            <CurrencyFormat value={charger.charger_price} displayType={'text'} thousandSeparator={true} prefix={'AED '} />
                        </h4>
                    </div>
                    <div className="total">
                        <h4 className="unbold ">Estimated Installation Fee: </h4>
                        <h4 className="unbold ">
                            <CurrencyFormat value={fixedFees.installation_fee} displayType={'text'} thousandSeparator={true} prefix={'AED '} />
                        </h4>

                    </div>
                    <div className="total">
                        <h6 className="unbold gray_font">Installation fees may vary depending on the result of the site visit study.</h6>
                    </div>
                    <div className="total margin__top">
                        <h4 className="unbold ">Total Estimation Fee: </h4>
                        <h4 className="unbold ">
                            <CurrencyFormat value={parseInt(fixedFees.site_visit_fee) + parseInt(fixedFees.installation_fee) + parseInt(charger.charger_price)} displayType={'text'} thousandSeparator={true} prefix={'AED '} />
                        </h4>
                    </div>
                    <div className="total margin__top">
                        <h3 className="unbold ">Total to pay </h3>
                        <h3 className="unbold ">
                            <CurrencyFormat value={parseInt(fixedFees.site_visit_fee)} displayType={'text'} thousandSeparator={true} prefix={'AED '} />
                        </h3>
                    </div>
                    <Link state= {{stateAddress: stateAddressVal}} to={`/sha7en/login/${charger.charger_id}`}>
                        <button id="btn__checkout" className="btn btn__primary margin__top" 
                        onClick={() => {
                        }} 
                        >Checkout</button>
                    </Link>
                </div>
            </div>            
        </div>
     );
}
 
export default Summary;