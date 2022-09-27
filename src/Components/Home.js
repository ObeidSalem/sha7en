// import './Css/Home.css';
import React,{ useState } from 'react'
import HeaderLogo from '../images/Sha7enLogo_White_200.png'
import Header_img_1 from '../images/Header_img_1.jpg'
import Cards from '../Components/Cards';



const Home = ({vehicles}) => {



    return ( 
        <>
            <div className="home_Header page_padding">
                <div className="left_Header">
                    <div className="text_align_left"><img className="header_logo" src={HeaderLogo} width="200" alt='logo'/></div>
                    <h1 className="header_slogan yellow_font text_align_left">Your connection to charge</h1>
                    <h2 className="header_description white_font text_align_left">We are a supportive application that works us a connector between the customers and the charger providers..</h2>
                </div>
                <div className="right_Header">
                    <div>
                        <div className="text_align_right"><img className="header_img" src={Header_img_1} alt='logo'/>
                        </div>
                    </div>
                </div>
            </div>
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