// import './Css/Home.css';
import React, { useState } from 'react'
import HeaderLogo from '../images/Sha7enLogo_White_200.png'
import Header_img_1 from '../images/Header_img_1.png'
import Cards from '../Components/Cards';


const Home = ({ vehicles }) => {

    return (
        <>
            <div className="home_vehicles page_padding text_align_left">
                <h1 className="black_font vehicles_title">Vehicles</h1>
                <div className="vehicles_container">
                    <Cards
                        vehicles={vehicles}
                    />
                </div>
                <div className="vehicles__container">

                </div>
            </div>

        </>
    );
}

export default Home;