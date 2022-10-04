import './Css/Auth.css';
import {useState, useRef} from 'react'
import { Link, useParams } from 'react-router-dom'


const Auth = ({chargers}) => {

    const { id } = useParams();

    const chargerArr = chargers.filter(charger => {
        return charger.charger_id === id;
    });

    const charger = chargerArr[0];
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return ( 
        // <>
        // yet underdevelopment
        // </>
        <div className="auth__content">
            
            <div className="auth__card__container">
             
                <div className="left fit__content checkout charger__cable__container general_shadow">
                    <h1 className="unbold">Sign In</h1>
                    <hr className="margin__top "/>
                    <div className="flex input__container">
                                <label className="">Email Address</label>
                                <input
                                    className="input__style"   
                                    placeholder="Email"
                                    type="text"
                                    value={email}
                                    onChange={(e) => {

                                    }}
                                    required 
                                />
                            </div>
                            <div className="flex input__container">
                                <label className="">Password</label>
                                <input
                                    className="input__style"   
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
    
                                    }}
                                    required 
                                />
                            </div>
                        {/* <br/> */}
                        <Link to={`/sha7en/Checkout/${charger.charger_id}`}>
                            <button id="btn__checkout" className="btn btn__primary margin__top" 
                                onClick={() => {
                                }} 
                            >Login</button>
                        </Link>
                        <p className="gray_font underline p__text margin__top pointer">Forgot Password?</p>
                        <hr className="margin__top "/>
                    <br/>
                    <h1 className="unbold">Guest Checkout</h1>
                    <hr className="margin__top "/>
                    <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                    </p>
                    <Link to={`/sha7en/Checkout/${charger.id}`}>
                        <button id="btn__checkout" className="btn btn__secondary margin__top" 
                        onClick={() => {
                        }} 
                        >Continue As a Guest</button>
                    </Link>
                </div>
            </div>            
        </div>
     );
}
 
export default Auth;