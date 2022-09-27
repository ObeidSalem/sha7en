// import './Css/Summary.css';
import {useState, useRef} from 'react'
import {motion} from 'framer-motion';
import { Link, useParams } from 'react-router-dom'


const Summary = () => {



    return ( 
        <>
        yet underdevelopment
        </>
        // <div className=" ">
        //     <div className="charger__header__container ">
        //         <img className="charger__header__image " 
        //                 src={charger.chargerImage}
        //                 onError={(e)=>{e.target.onerror = null; e.target.src="/images/vehicle_cover_alt.jpg"}}
        //         /> 
        //         <div className="charger__header__content ">
        //             <h1 className="black_font h1__text">{charger.charBrand}</h1>
        //             <h2 className="black_font h2__text">{charger.chargerName}</h2>
        //             <h2 className="black_font ">____________________</h2>
        //             <br/>
        //             <p className="black_font p__text">{charger.description}</p>

        //         </div>
        //     </div> 

        //     <div className="charger__header__container charger__cable__container general_shadow">
        //         <motion.div ref={carousel} className="carousel">
        //             <h2 className=" blue_font unbold text_align_left black_font h2__text">House Information</h2>
        //             <br/>
        //             <hr/>
        //             <div className="flex input__container">
        //                 <label className="">House Type </label>
        //                 <div className="flex inner__input__container ">

        //                 <input
        //                     className="input__style"   
        //                     placeholder="Apartment"
        //                     type="text"
        //                     value={Apartment}
        //                     onChange={(e) => {

        //                     }}
        //                     required 
        //                     /><input
        //                     className="input__style"   
        //                     placeholder="Villa"
        //                     type="text"
        //                     value={Villa}
        //                     onChange={(e) => {

        //                     }}
        //                     required 
        //                     />
        //                 </div>
        //             </div>
        //             <div className="flex input__container">
        //                 <label className="">House Ownership </label>
        //                 <div className="flex inner__input__container ">

        //                 <input
        //                     className="input__style"   
        //                     placeholder="Owned"
        //                     type="text"
        //                     value={Owned}
        //                     onChange={(e) => {

        //                     }}
        //                     required 
        //                     /><input
        //                     className="input__style"   
        //                     placeholder="Rental"
        //                     type="text"
        //                     value={Rental}
        //                     onChange={(e) => {

        //                     }}
        //                     required 
        //                     />
        //                 </div>
        //             </div>
        //             <div className="flex input__container">
        //                 <label className="">House Address</label>
        //                 <input
        //                     className="input__style"   
        //                     placeholder="Address"
        //                     type="text"
        //                     value={Address}
        //                     onChange={(e) => {

        //                     }}
        //                     required 
        //                 />
        //             </div>
        //             <div className="flex input__container">
        //                 <label className="">Additional Info</label>
        //                 <input
        //                     className="input__style"   
        //                     placeholder="Phone No."
        //                     type="text"
        //                     value={Note}
        //                     onChange={(e) => {

        //                     }}
        //                     required 
        //                 />
        //             </div>
        //         <br/>
        //         <hr/>
        //         </motion.div>
        //         <motion.div className="btn_container">
        //             <br/>
        //             <div className="popup__model__container">
        //                 <button className="btn btn__secondary general_shadow p__text"
        //                 onClick={() => {
        //                     setStep1(true); 
        //                     setStep2(false); 
        //                     setStep2(false); 
                            
        //                     setBlueFont1("blue_font");
        //                     setBlueFont2("");
        //                     setBlueFont3("");

        //                 }} 
        //                 >Back to step 1</button>
        //                 <button className="btn btn__primary general_shadow p__text" 
        //                 onClick={() => {
        //                     setStep1(false); 
        //                     setStep2(false); 
        //                     setStep3(true); 
                            
        //                     setBlueFont1("");
        //                     setBlueFont2("");
        //                     setBlueFont3("blue_font");
        //                 }} 
        //                 // modelName={selectedModel}
        //                 >   Next   </button>
        //             </div>
        //         </motion.div>

        //     </div>
        // </div>
     );
}
 
export default Summary;