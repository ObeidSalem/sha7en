// import './Css/Home.css';
import React,{ useState } from 'react'
import HeaderLogo from '../images/Sha7enLogo_White_200.png'
import Header_img_1 from '../images/Header_img_1.png'
import { Link } from 'react-router-dom'



const Home = () => {

    const partners_image = "data:image/png;base64,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"

    return ( 
        <>
            <div className="home_Header page_padding">
                <div className="left_Header">
                    <div className="text_align_left"><img className="header_logo" src={HeaderLogo} width="200" alt='logo'/></div>
                    <h1 className="header_slogan yellow_font text_align_left">Your connection to charge</h1>
                    <h2 className="header_description white_font text_align_left">We are a supportive application that works us a connector between the customers and the charger providers..</h2>
                    <Link id="BookNow" className="animation btn btn__secondary h2__text" to="/sha7en/Home"
                    >BOOK NOW</Link>
                </div>
                <div className="right_Header">
                    <div>
                        <div className="text_align_right"><img className="header_img" src={Header_img_1} alt='logo'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home_vehicles page_padding ">
                <h1 className="unbold black_font vehicles_title">OUR PARTNERS</h1>
                <div className="vehicles_container">
                    <div className="partners_container">
                        <img className="partners_image general_shadow" src={partners_image} width="" alt='logo'/>
                        <img className="partners_image general_shadow" src={partners_image} width="" alt='logo'/>
                        <img className="partners_image general_shadow" src={partners_image} width="" alt='logo'/>
                    </div>

                </div>

            </div>

        </>
     );
}
 
export default Home;