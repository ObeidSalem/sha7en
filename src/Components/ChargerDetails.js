import './Css/ChargerDetails.css';
import {useState, useRef} from 'react'
import {motion} from 'framer-motion';
import { Link, useParams } from 'react-router-dom'


const ChargerDetails = ({chargers}) => {

    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);

    const [selectedCable, setSelectedCable] = useState("");
    const [HouseType, setHouseType] = useState("");
    const [HouseOwnership, setHouseOwnership] = useState("");
    const [Rental, setRental] = useState("");
    const [Address, setAddress] = useState("");
    const [Note, setNote] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [remarks, setRemarks] = useState("");    

    const [blueFont1, setBlueFont1] = useState("blue_font");
    const [blueFont2, setBlueFont2] = useState("");
    const [blueFont3, setBlueFont3] = useState("");
    const [blueRadio1, setBlueRadio1] = useState("");
    const [blueRadio2, setBlueRadio2] = useState("");
    const [blueRadio3, setBlueRadio3] = useState("");
    const [blueRadio4, setBlueRadio4] = useState("");



    const [width, setWidth] = useState(600);
    const carousel = useRef();
    
    const { id } = useParams();

    const chargerArr = chargers.filter(charger => {
        return charger.charger_id === id;
    });

    const charger = chargerArr[0];

    // console.log(charger.cable_setups)



    return ( 
        <div className=" ">
            <div className="charger__header__container ">
                <img className="charger__header__image " 
                        src={charger.chargerImage}
                        onError={(e)=>{e.target.onerror = null; e.target.src="/images/vehicle_cover_alt.jpg"}}
                /> 
                <div className="charger__header__content ">
                    <h1 className="black_font h1__text">{charger.charBrand}</h1>
                    <h2 className="black_font h2__text">{charger.chargerName}</h2>
                    <h2 className="black_font ">____________________</h2>
                    <br/>
                    <p className="black_font p__text">{charger.description}</p>

                </div>
            </div> 
            <div className="charger__header__container ">
                <div className="steps__container ">
                    <hr/>
                    <h2 className={`unbold text_align_left black_font h2__text ${blueFont1}`}>Step 1</h2>
                    <h2 className={`unbold text_align_left black_font h2__text ${blueFont1}`}>House Details</h2>
                </div>
                <div className="steps__container ">
                    <hr/>
                    <h2 className={`unbold text_align_left black_font h2__text ${blueFont2}`}>Step 2</h2>
                    <h2 className={`unbold text_align_left black_font h2__text ${blueFont2}`}>Personal Details</h2>
                </div>                
                <div className="steps__container ">
                    <hr/>
                    <h2 className={`unbold text_align_left black_font h2__text ${blueFont3}`}>Step 3</h2>
                    <h2 className={`unbold text_align_left black_font h2__text ${blueFont3}`}>Special Remarks</h2>
                </div>
            </div>

            <div className="charger__header__container charger__cable__container general_shadow">
                {step1 ?
                    <>
                        <motion.div ref={carousel} className="carousel">
                        <h2 className=" blue_font unbold text_align_left black_font h2__text">House Information</h2>
                        <br/>
                        <hr/>
                        <div className="flex input__container">
                            <label className="">House Type</label>
                            <div className="flex inner__input__container ">
                                <input 
                                    className={`btn btn__secondary input__style margin_right gray_font text_align_left p__text ${blueRadio1}`}
                                    type="button" 
                                    onClick={(e) => {
                                        setHouseType(e.target.value)
                                        if (e.target.value === "Apartment"){
                                            setBlueRadio1("blue_Radio")
                                            setBlueRadio2("")

                                        }
                                    }} 
                                    value="Apartment"
                                />
                                <input 
                                    className={`btn btn__secondary input__style margin_right gray_font text_align_left p__text ${blueRadio2}`}
                                    type="button" 
                                    onClick={(e) => { 
                                        setHouseType(e.target.value)
                                        if (e.target.value === "Villa"){
                                            setBlueRadio1("")
                                            setBlueRadio2("blue_Radio")

                                        }
                                    }} 
                                    value="Villa"
                                />

                            </div>
                        </div>
                        <div className="flex input__container">
                            <label className="">House Ownership</label>
                            <div className="flex inner__input__container ">
                                <input 
                                    className={`btn btn__secondary input__style margin_right gray_font text_align_left p__text ${blueRadio3}`}
                                    type="button" 
                                    onClick={(e) => { 
                                        setHouseOwnership(e.target.value);
                                        if (e.target.value === "Owned"){
                                            setBlueRadio4("")
                                            setBlueRadio3("blue_Radio")

                                        }
                                    }} 
                                    value="Owned"
                                />
                                <input 
                                    className={`btn btn__secondary input__style margin_right gray_font text_align_left p__text ${blueRadio4}`}
                                    type="button" 
                                    onClick={(e) => { 
                                        setHouseOwnership(e.target.value);
                                        if (e.target.value === "Rental"){
                                            setBlueRadio3("")
                                            setBlueRadio4("blue_Radio")

                                        }

                                    }} 
                                    value="Rental"
                                />
                           
                            </div>
                        </div>
                        <div className="flex input__container">
                            <label className="">House Address</label>
                            <textarea
                                className="text_area input__style"   
                                placeholder="Address"
                                type="text"
                                rows="5"
                                value={Address}
                                onChange={(e) => {
                                    setAddress(e.target.value)

                                }}
                                required 
                            />
                        </div>
                    <br/>
                    <hr/>
                    </motion.div>
                        <motion.div className="btn_container">
                            <br/>
                            <div className="popup__model__container">
                                <Link className="" to="/sha7en/chargers">
                                    <button className="btn btn__secondary general_shadow p__text">Cancel</button>
                                </Link>
                                {HouseType && HouseOwnership && Address? 
                                    <button className="btn btn__primary general_shadow h3__text" 
                                    onClick={() => {
                                        setStep1(false); 
                                        setStep2(true); 
                                        setStep3(false); 

                                        setBlueFont1("");
                                        setBlueFont2("blue_font");
                                        setBlueFont3("");

                                    }} 
                                    // modelName={selectedModel}
                                    >Next</button>
                                :
                                    <button className="btn btn__primary general_shadow h3__text opacity_50">Next</button>
                                }
                            </div>
                        </motion.div>
                    </>
                : ''}








                {step2 ?
                <>
                    <motion.div ref={carousel} className="carousel">
                        <h2 className=" blue_font unbold text_align_left black_font h2__text">Personal Information</h2>
                        <br/>
                        <hr/>
                        <div className="flex input__container">
                            <label className="">Name</label>
                            <input
                                className="input__style"   
                                placeholder="Name"
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                    // setOwner(user.firstNameRef)
                                    // setLocation(user.addressRef)
                                    // setPhoneNo(user.phoneRef)
                                    // setIsAvailable(true)
                                    // console.log(owner + location + phoneNo + uid)
                                }}
                                required 
                            />
                        </div>
                        <div className="flex input__container">
                            <label className="">Email Address</label>
                            <input
                                className="input__style"   
                                placeholder="Email"
                                type="text"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)

                                }}
                                required 
                            />
                        </div>
                        <div className="flex input__container">
                            <label className="">Phone Number</label>
                            <input
                                className="input__style"   
                                placeholder="Phone No."
                                type="text"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value)

                                }}
                                required 
                            />
                        </div>
                    <br/>
                    <hr/>
                    </motion.div>
                    <motion.div className="btn_container">
                        <br/>
                        <div className="popup__model__container">
                            <button className="btn btn__secondary general_shadow p__text"
                            onClick={() => {
                                setStep1(true); 
                                setStep2(false); 
                                setStep2(false); 
                                
                                setBlueFont1("blue_font");
                                setBlueFont2("");
                                setBlueFont3("");

                            }} 
                            >Back</button>
                            {name && email && phone?
                                <button className="btn btn__primary general_shadow p__text" 
                                onClick={() => {
                                    setStep1(false); 
                                    setStep2(false); 
                                    setStep3(true); 
                                    
                                    setBlueFont1("");
                                    setBlueFont2("");
                                    setBlueFont3("blue_font");
                                }} 
                                // modelName={selectedModel}
                                >   Next   </button>
                            :
                                <button className="btn btn__primary general_shadow h3__text opacity_50">Next</button>
                            }
                        </div>
                    </motion.div>
                </>
                :''}







                {step3?
                    <>
                        <motion.div ref={carousel} className="carousel">
                            <div className="flex input__container">
                                <label className="">Special Remarks</label>
                                <textarea 
                                    className="text_area input__style"   
                                    placeholder="Special Remarks."
                                    type="textarea"
                                    rows = "5"
                                    value={remarks}
                                    onChange={(e) => {
                                        setRemarks(e.target.value)
                                    }}
                                    required 
                                />
                            </div>
                        </motion.div>
                        <motion.div className="btn_container">
                            <br/>
                            <div className="popup__model__container">
                                <button className="btn btn__secondary general_shadow p__text"
                                onClick={() => {
                                    setStep1(false); 
                                    setStep2(true); 
                                    setStep3(false); 
                                    
                                    setBlueFont1("");
                                    setBlueFont2("blue_font");
                                    setBlueFont3("");
                                }} 
                                >Back</button>
                            
                                <Link to={`/sha7en/Summary/${charger.charger_id}`}>
                                    <button className="btn btn__primary general_shadow p__text" 
                                    onClick={() => {
                                        setStep1(false); 
                                        setStep2(false); 
                                        setStep3(true); 
                                    }} 
                                    // modelName={selectedModel}
                                    >Summary</button>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                :""}
            </div>
        </div>
     );
}
 
export default ChargerDetails;