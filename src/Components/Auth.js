import './Css/Auth.css';
import React, {useState, useRef, useEffect} from 'react'
import { useNavigate, Link, useParams, useLocation } from 'react-router-dom'
import {GoogleButton} from 'react-google-button'
import {UserAuth} from '../context/AuthContext'

const Auth = ({chargers}) => {

    const { id } = useParams();

    const chargerArr = chargers.filter(charger => {
        return charger.charger_id === id;
    });

    const charger = chargerArr[0];

    const stateAddressVal = useLocation().state.stateAddress;

  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate  = useNavigate()

    const { googleSignIn, user } = UserAuth();
    // const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
        await googleSignIn();
        // navigate(`/sha7en/Checkout/${charger.charger_id}`)
        } catch (error) {
        console.log(error);
        }
    };

    // useEffect(() => {
    //     if (user != null) {
    //     navigate('/account');
    //     }
    // }, [user]);

    return ( 
        // <>
        // yet underdevelopment
        // </>
        <div className="auth__content">
            
            <div className="auth__card__container">
             
                <div className="left fit__content auth_card charger__cable__container general_shadow">
                    <h1 className="unbold">Sign In</h1>
                    <hr className="margin__top "/>
                    {/* <div className="flex input__container">
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
                            </div> */}
                        <br/>
                        <GoogleButton state={{stateAddress: stateAddressVal}} onClick={handleGoogleSignIn}/>
                        
                        {user &&
                            <>                                
                                <Link state= {{stateAddress: stateAddressVal}} to={`/sha7en/Checkout/${charger.charger_id}`}>
                                    <button className="btn btn__Auth btn__secondary margin__top" 
                                        onClick={() => {
                                        }} 
                                    >Continue</button>
                                </Link>
                            </>
                        }
                    <br/>
                    {!user &&
                        <>
                            <h1 className="unbold">Guest Checkout</h1>
                            <hr className="margin__top "/>
                            <p className="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                            </p>
                            <Link state= {{stateAddress: stateAddressVal}} to={`/sha7en/Checkout/${charger.charger_id}`}>
                                <button className="btn btn__Auth btn__secondary margin__top" 
                                onClick={() => {
                                }} 
                                >Continue As a Guest</button>
                            </Link>
                        </>
                    }
                </div>
            </div>            
        </div>
     );
}
 
export default Auth;