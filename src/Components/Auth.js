import './Css/Auth.css';
import firebase from "../firebase";
import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, Link, useParams, useLocation } from 'react-router-dom'
import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../context/AuthContext'
import { v4 as uuidv4 } from "uuid";
import { onSnapshot, collection, doc, setDoc, getDocs } from "firebase/firestore"
import db from "../firebase"

// import { Alert } from "react-bootstrap"


const Auth = ({ chargers, Email }) => {

    const { id } = useParams();

    const chargerArr = chargers.filter(charger => {
        return charger.charger_id === id;
    });

    const charger = chargerArr[0];

    const stateAddressVal = useLocation().state.stateAddress;
    const stateEmail = useLocation().state.stateEmail;
    const stateName = useLocation().state.stateName;
    const statePhone = useLocation().state.statePhone;
    const stateHouseType = useLocation().state.stateHouseOwnership;
    const stateHouseOwnership = useLocation().state.stateHouseOwnership;
    const stateLati = useLocation().state.stateLati;
    const stateLong = useLocation().state.stateLong;
    const stateRemarks = useLocation().state.stateRemarks;

    const stateModel = useLocation().state.stateModel;
    const stateBrand = useLocation().state.stateBrand;
    const stateProductionYear = useLocation().state.stateProductionYear;
    const stateColor = useLocation().state.stateColor;
    const stateServiceType = useLocation().state.stateServiceType;
    const stateChargerType = useLocation().state.stateChargerType;

    const stateCharBrand = useLocation().state.stateCharBrand;
    const stateChargerName = useLocation().state.stateChargerName;
    const stateChargerId = useLocation().state.stateChargerId;


    const [email, setEmail] = useState(Email);
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate()

    const { googleSignIn, user } = UserAuth();
    // const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            if (user) {
                navigate(`/sha7en/Summary/${charger.charger_id}`, { state: { stateAddress: stateAddressVal } });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const { signup } = UserAuth()
    // const usersRef = firebase.firestore().collection("Users");
    const usersRef = collection(db, "Users");

    function createAccount() {
        console.log("createAccount has been called")
        return new Promise(function (resolve, reject) {
            if (password.length >= 8) {
                signup(email, password).then(() => {
                    resolve()
                    console.log("account has been created")
                    navigate(`/sha7en/Summary/${charger.charger_id}`, { state: { stateAddress: stateAddressVal } });
                })
            } else {
                reject("Failed to create an account")
            }
        })
    }

    async function handleSubmit(newUser) {
        try {
            setError("")
            setLoading(true)
            await createAccount()
            await setDoc(doc(usersRef, email), {
                Email: email,
                // Address: stateAddressVal,  Issue
                // Name: stateName,
                // Phone: statePhone,
                // HouseType: stateHouseType,
                // HouseOwnership: stateHouseOwnership,
                // Lati: stateLati,
                // Long: stateLong,
                // Remarks: stateRemarks,
                // VehicleModel: stateModel,
                // VehicleBrand: stateBrand,
                // VehicleProductionYear: stateProductionYear,
                // VehicleColor: stateColor,
                // ServiceType: stateServiceType,
                // ChargerPort: stateChargerType,
            });
            navigate(`/sha7en/Summary/${charger.charger_id}`, { state: { stateAddress: stateAddressVal } });
        } catch (err) {
            setError("Failed to create an account")
            console.log(err)
        }
        setLoading(false)

    }

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
                    <h2 className="unbold">Sign In By Email</h2>
                    <hr className="margin__top " />
                    <div className="flex input__container">
                        <label className="">Email Address</label>
                        <div className="flex inner__input__container ">
                            <input
                                className="input__style"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                required
                            />
                        </div>

                    </div>
                    <div className="flex input__container">
                        <label className="">Password</label>
                        <div className="flex inner__input__container ">
                            <input
                                className="input__style"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                required
                            />
                        </div>

                    </div>
                    <button id="btn__checkout" className="btn btn__Auth btn__secondary margin__top" type="submit"
                        onClick={() => {
                            handleSubmit({ id: uuidv4() })
                        }}
                    >Sign Up</button>

                    {/* <input
                        className="input__style"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value.toLowerCase())}
                    />
                    <input
                        className="input__style"
                        placeholder="password"
                        type="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input onClick={() => handleSubmit({ id: uuidv4() })}
                        type="submit" id="signup__button" className="header__signUp" value="Sign Up"></input>F */}
                    <br />
                    <br />
                    <h2 className="unbold">Or Sign In With Google</h2>
                    <hr className="margin__top " />
                    <GoogleButton style={{ width: "fit" }} className="margin__top " state={{ stateAddress: stateAddressVal }} onClick={handleGoogleSignIn} />
                    <br />
                    {!user &&
                        <>
                            <h2 className="unbold">Guest Checkout</h2>
                            <hr className="margin__top " />
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            </p>
                            <Link state={{ stateAddress: stateAddressVal }} to={`/sha7en/Summary/${charger.charger_id}`}>
                                <button id="btn__checkout" className="btn btn__Auth btn__secondary margin__top"
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