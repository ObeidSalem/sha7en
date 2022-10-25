import React, { useState } from 'react'
import db from "../firebase"
import { onSnapshot, collection, doc, setDoc, getDocs } from "firebase/firestore"
// import AddModel from "../Components/AddModel"


const AdminPanel = () => {

    const barndRef = collection(db, "vehicles");
    const chargersRef = collection(db, "chargers");
    const fixedFeesRef = collection(db, "fixedFees");

    const [isAddVehicle, set_isAddVehicle] = useState(false)
    const [isSubmitVehicle, set_isSubmitVehicle] = useState(false)

    const [zoho_correlation_id, set_zoho_correlation_id] = useState("")
    const [brand_id, set_brand_id] = useState("")
    const [brand_name, set_brand_name] = useState("")
    const [vehModels, set_vehModels] = useState([])
    const [image, set_image] = useState("")
    const [number_of_vehicles, set_number_of_vehicles] = useState(0)
    const [number_of_vehicles_counter, set_number_of_vehicles_counter] = useState(0)

    const [zoho_correlation_id_charger, set_zoho_correlation_id_charger] = useState("")
    const [charger_id, set_charger_id] = useState("")
    const [charger_price, set_charger_price] = useState()
    const [charBrand, set_charBrand] = useState("")
    const [chargerName, set_chargerName] = useState("")
    const [description, set_description] = useState("")
    const [supportedPorts, set_supportedPorts] = useState([])
    const [brandImage, set_brandImage] = useState("")
    const [chargerImage, set_chargerImage] = useState("")

    const [modelName, set_modelName] = useState("")
    const [productionYear, set_productionYear] = useState([])
    const [compatibleChargers, set_compatibleChargers] = useState([])
    const [colors, set_colors] = useState([])
    const [image_Vehicle, set_image_Vehicle] = useState("")

    function handleSingleMpdel() {
        const splitArrayproductionYear = productionYear.split(", ");
        const splitArraycompatibleChargers = compatibleChargers.split(", ");
        const splitArraycolors = colors.split(", ");
        let intArrayproductionYear = []
        let intArraycompatibleChargers = []

        for (let i = 0; i < splitArrayproductionYear.length; i++) {
            const toInt = parseInt(splitArrayproductionYear[i])
            intArrayproductionYear.push(toInt)
        }
        for (let i = 0; i < splitArraycompatibleChargers.length; i++) {
            const toInt = parseInt(splitArraycompatibleChargers[i])
            intArraycompatibleChargers.push(toInt)
        }

        const Model = {
            modelName: modelName,
            productionYear: intArrayproductionYear,
            compatibleChargers: intArraycompatibleChargers,
            colors: splitArraycolors,
            image: image_Vehicle,
        }
        set_vehModels([...vehModels, Model])

        console.log("vehModels", vehModels)
    }



    function handleSubmitModels(Model) {
        set_vehModels([...vehModels, Model])
        console.log("vehModels", vehModels)

        const data = {
            zoho_correlation_id: zoho_correlation_id,
            brand_id: brand_id,
            brand_name: brand_name,
            vehModels: vehModels,
            image: image,
        };
        console.log(data);

        if (data.zoho_correlation_id && brand_id && brand_name && vehModels && image) {
            setDoc(doc(barndRef, brand_name), data );
        }

    }
 
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
                    <div className="flex input__container">
                        <label className="">Number of Vehicles to Add</label>
                        <input
                            className="input__style"
                            placeholder="Ex.:5"
                            type="text"
                            value={number_of_vehicles}
                            onChange={(e) => {
                                set_number_of_vehicles(e.target.value)
                                set_number_of_vehicles_counter(1)

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
                                if (number_of_vehicles > 0)
                                    set_isAddVehicle(true)

                                // const data = {
                                //     zoho_correlation_id: zoho_correlation_id,
                                //     brand_id: brand_id,
                                //     brand_name: brand_name,
                                //     image: image
                                // };

                                // console.log(data);
                                // if (data.zoho_correlation_id && brand_id && brand_name && image) {
                                //     setDoc(doc(barndRef, brand_name), data );
                                // }
                            }}
                        // modelName={selectedModel}
                        >   Next   </button>
                    </div>
                </div>
            </div>

            {isAddVehicle ?
                // <AddModel/>
                <div className="charger__header__container charger__cable__container general_shadow">
                    <div className="carousel">
                        <h2 className=" blue_font unbold text_align_left black_font h2__text">Add Vehicle Brand {number_of_vehicles_counter}</h2>
                        <br />
                        <hr />
                        <div className="flex input__container">
                            <label className="">Model Name</label>
                            <input
                                className="input__style"
                                placeholder="Ex.:Model 3"
                                type="text"
                                value={modelName}
                                onChange={(e) => {
                                    set_modelName(e.target.value)
                                }}
                                required
                            />
                        </div>
                        <div className="flex input__container">
                            <label className="">Production Years</label>
                            <input
                                className="input__style"
                                placeholder="Ex.:2016, 2017, 2018"
                                type="text"
                                value={productionYear}
                                onChange={(e) => {
                                    set_productionYear(e.target.value)

                                }}
                                required
                            />
                        </div>
                        <div className="flex input__container">
                            <label className="">Compatible Chargers</label>
                            <input
                                className="input__style"
                                placeholder="Ex.:123, 124"
                                type="text"
                                value={compatibleChargers}
                                onChange={(e) => {
                                    set_compatibleChargers(e.target.value)

                                }}
                                required
                            />
                        </div>
                        <div className="flex input__container">
                            <label className="">Vehicle Colors</label>
                            <input
                                className="input__style"
                                placeholder="Ex.#ff0000, #00ff00"
                                type="text"
                                value={colors}
                                onChange={(e) => {
                                    set_colors(e.target.value)

                                }}
                                required
                            />
                        </div>
                        <div className="flex input__container">
                            <label className="">Vehicle Image</label>
                            <input
                                className="input__style"
                                placeholder="Ex.:URL"
                                type="text"
                                value={image_Vehicle}
                                onChange={(e) => {
                                    set_image_Vehicle(e.target.value)

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

                                    if (parseInt(number_of_vehicles_counter) > number_of_vehicles) {
                                        set_number_of_vehicles_counter(1)
                                        set_isSubmitVehicle(false)
                                        set_isAddVehicle(false)
                                    }

                                    if (number_of_vehicles == parseInt(number_of_vehicles_counter) - 1) {
                                        console.log("number_of_vehicles_counter", number_of_vehicles_counter)
                                        set_number_of_vehicles_counter(1)
                                        set_isSubmitVehicle(false)
                                        set_isAddVehicle(false)
                                    }

                                    else if (number_of_vehicles > 0) {
                                        handleSingleMpdel()
                                        set_number_of_vehicles_counter(parseInt(number_of_vehicles_counter) + 1)
                                    }

                                    if (number_of_vehicles == parseInt(number_of_vehicles_counter)) {
                                        set_isSubmitVehicle(true)

                                    }
                                }}
                            // modelName={selectedModel}
                            >   Add vehicle {parseInt(number_of_vehicles_counter)} {number_of_vehicles} </button>

                            {isSubmitVehicle ?
                                <button className="btn btn__primary general_shadow p__text"
                                    onClick={() => {
                                        set_number_of_vehicles_counter(1)
                                        set_isSubmitVehicle(false)
                                        set_isAddVehicle(false)

                                        handleSubmitModels()
                                    }}
                                // modelName={selectedModel}
                                >   Submit the Record to database </button>
                                : ""}
                        </div>
                    </div>
                </div>
                : ""}



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
                            <label className="">Supported Ports</label>
                            <input
                                className="input__style"
                                placeholder="Ex.:Type 1, Type 2, GB/T, CCS" 
                                type="text"
                                value={supportedPorts}
                                onChange={(e) => {
                                    set_supportedPorts(e.target.value)

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

                                const splitArraySupportedPorts = supportedPorts.split(", ");

                                const data = {
                                    zoho_correlation_id: zoho_correlation_id_charger,
                                    charger_id: charger_id,
                                    charger_price: charger_price,
                                    charBrand: charBrand,
                                    chargerName: chargerName,
                                    description: description,
                                    supportedPorts:splitArraySupportedPorts,
                                    brandImage: brandImage,
                                    chargerImage: chargerImage,
                                };

                                console.log(data);
                                if (zoho_correlation_id_charger && charger_id && charger_price && charBrand && chargerName && description && supportedPorts && brandImage && chargerImage) {
                                    setDoc(doc(chargersRef, charger_id), data);
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