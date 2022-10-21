import React, { useState } from 'react'
import db from "../firebase"
import { onSnapshot, collection, doc, setDoc, getDocs } from "firebase/firestore"


const AdminPanel = () => {

    const barndRef = collection(db, "vehicles");
    const chargersRef = collection(db, "chargers");
    const fixedFeesRef = collection(db, "fixedFees");

    const [zoho_correlation_id, set_zoho_correlation_id] = useState("")
    const [brand_id, set_brand_id] = useState("")
    const [brand_name, set_brand_name] = useState("")
    const [vehModels, set_vehModels] = useState("")
    const [image, set_image] = useState("")

    const [zoho_correlation_id_charger, set_zoho_correlation_id_charger] = useState("")
    const [charger_id, set_charger_id] = useState("")
    const [charger_price, set_charger_price] = useState()
    const [charBrand, set_charBrand] = useState("")
    const [chargerName, set_chargerName] = useState("")
    const [description, set_description] = useState("")
    const [brandImage, set_brandImage] = useState("")
    const [chargerImage, set_chargerImage] = useState("")


    // {
    //     zoho_correlation_id_charger:"2009716386789", 
    //     charger_id:"124", 
    //     charger_price:"2150", 
    //     charBrand: "Gewiss", 
    //     chargerName: 'GWJ3214R', 
    //     description:"I-CON PREMIUM WALL BOX - WALL-MOUNTING CHARGING STATION - RFID - TYPE 2 MOBILE WITH CABLE - 22 KW - IP55.", 
    //     // cable_setups:[{setup_name:"Top Cabling", setup_img:'https://www.en-plustech.com/uploads/e8297bb1.jpg'},{setup_name:"Bottom Cabling", setup_img:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663627709-lectron-level-2-ev-charger-embed-1663627697.jpg?crop=1xw:1xh;center,top&resize=480%3A%2A'}], 
    //     // accessories:[{item_name:'adapter', description:'GB/T to type2 adapter', price:100.5, item_img:'URL', mandatory:true},{item_name:'cable', description:'type2 extension cable', price:200.5, item_img:'URL', mandatory:true}], 
    //     brandImage:"data:image/jpeg;base64,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", chargerImage: 'data:image/jpeg;base64,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'
    //   },

    return (
        <>
            <div className="charger__header__container charger__cable__container general_shadow">
                <div className="carousel">
                    <h2 className=" blue_font unbold text_align_left black_font h2__text">Add Vehicle Brand</h2>
                    <br />
                    <hr />
                    <div className="flex input__container">
                        <label className="">zoho_correlation_id</label>
                        <input
                            className="input__style"
                            placeholder="Ex.:20097163889"
                            type="text"
                            value={zoho_correlation_id}
                            onChange={(e) => {
                                set_zoho_correlation_id(e.target.value)
                            }}
                            required
                        />
                    </div>
                    <div className="flex input__container">
                        <label className="">brand_id</label>
                        <input
                            className="input__style"
                            placeholder="Ex.:123"
                            type="text"
                            value={brand_id}
                            onChange={(e) => {
                                set_brand_id(e.target.value)

                            }}
                            required
                        />
                    </div>
                    <div className="flex input__container">
                        <label className="">brand_name</label>
                        <input
                            className="input__style"
                            placeholder="Ex.:Tesla"
                            type="text"
                            value={brand_name}
                            onChange={(e) => {
                                set_brand_name(e.target.value)

                            }}
                            required
                        />
                    </div>
                    <div className="flex input__container">
                        <label className="">Brand Image</label>
                        <input
                            className="input__style"
                            placeholder="Ex.:URL"
                            type="text"
                            value={image}
                            onChange={(e) => {
                                set_image(e.target.value)

                            }}
                            required
                        />
                    </div>
                    <br />
                    <hr />
                </div>
                <div className="btn_container">
                    <br />
                    <div className="popup__model__container">
                        <button className="btn btn__primary general_shadow p__text"
                            onClick={() => {
                                const data = {
                                    zoho_correlation_id: zoho_correlation_id,
                                    brand_id: brand_id,
                                    brand_name: brand_name,
                                    image: image
                                };

                                console.log(data);
                                if (data.zoho_correlation_id && brand_id && brand_name && image) {
                                    setDoc(doc(barndRef, brand_name), data );
                                }
                            }}
                        // modelName={selectedModel}
                        >   Submit   </button>
                    </div>
                </div>
            </div>



            <div className="charger__header__container charger__cable__container general_shadow">
                <div className="carousel">
                    <h2 className=" blue_font unbold text_align_left black_font h2__text">Add Charger Brand</h2>
                    <br />
                    <hr />
                    <div className="flex input__container">
                        <label className="">zoho_correlation_id</label>
                        <input
                            className="input__style"
                            placeholder="Ex.:20097163889"
                            type="text"
                            value={zoho_correlation_id_charger}
                            onChange={(e) => {
                                set_zoho_correlation_id_charger(e.target.value)
                            }}
                            required
                        />
                    </div>
                    <div className="flex input__container">
                        <label className="">charger_id</label>
                        <input
                            className="input__style"
                            placeholder="Ex.:Tesla"
                            type="text"
                            value={charger_id}
                            onChange={(e) => {
                                set_charger_id(e.target.value)

                            }}
                            required
                        />
                    </div>
                    <div className="flex input__container">
                        <label className="">charger_price</label>
                        <input
                            className="input__style"
                            placeholder="Ex.:5000"
                            type="text"
                            value={charger_price}
                            onChange={(e) => {
                                set_charger_price(e.target.value)

                            }}
                            required
                        />
                    </div>
                    <div className="flex input__container">
                        <label className="">charger Brand</label>
                        <input
                            className="input__style"
                            placeholder="Ex.:Tesla"
                            type="text"
                            value={charBrand}
                            onChange={(e) => {
                                set_charBrand(e.target.value)

                            }}
                            required
                        />
                    </div>
                    <div className="flex input__container">
                        <label className="">charger Model Name</label>
                        <input
                            className="input__style"
                            placeholder="Ex.: Model fx4"
                            type="text"
                            value={chargerName}
                            onChange={(e) => {
                                set_chargerName(e.target.value)

                            }}
                            required
                        />
                    </div>
                    <div className="flex input__container">
                        <label className="">Charger Description</label>
                        <input
                            className="input__style"
                            placeholder="Ex.:description"
                            type="text"
                            value={description}
                            onChange={(e) => {
                                set_description(e.target.value)

                            }}
                            required
                        />
                    </div>
                    <div className="flex input__container">
                        <label className="">brand Image</label>
                        <input
                            className="input__style"
                            placeholder="Ex.:URL"
                            type="text"
                            value={brandImage}
                            onChange={(e) => {
                                set_brandImage(e.target.value)

                            }}
                            required
                        />
                    </div>
                    <div className="flex input__container">
                        <label className="">Charger Image</label>
                        <input
                            className="input__style"
                            placeholder="Ex.:URL"
                            type="text"
                            value={chargerImage}
                            onChange={(e) => {
                                set_chargerImage(e.target.value)

                            }}
                            required
                        />
                    </div>
                    <br />
                    <hr />
                </div>
                <div className="btn_container">
                    <br />
                    <div className="popup__model__container">
                        <button className="btn btn__primary general_shadow p__text"
                            onClick={() => {
                                const data = {
                                    zoho_correlation_id:zoho_correlation_id_charger,
                                    charger_id: charger_id,
                                    charger_price: charger_price,
                                    charBrand: charBrand,
                                    chargerName: chargerName,
                                    description: description,
                                    brandImage: brandImage,
                                    chargerImage: chargerImage,
                                };

                                console.log(data);
                                if (zoho_correlation_id_charger && charger_id && charger_price && charBrand && chargerName && description && brandImage && chargerImage) {
                                    setDoc(doc(chargersRef, charger_id), data );
                                }
                            }}
                        // modelName={selectedModel}
                        >   Submit   </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminPanel;