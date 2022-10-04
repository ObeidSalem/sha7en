// import './Css/Footer.css';
import React,{ useState } from 'react'
import HeaderLogo from '../images/Sha7enLogo_White_200.png'
import PropTypes from "prop-types";
// import "../styles/Links.css";

const Footer = ({ links }) => {



    return ( 
        <>
            <footer className="home_Header page_padding footer_container">
                <div className="text_align_left">
                    <img className="header_logo" src={HeaderLogo} width="200" alt='logo'/>
                </div>
                <div className="margin__top footer_content">
                    <div className="footer_element">
                        <h3 className="header_description white_font text_align_left">FOLLOW US</h3>
                        <div className="social-links">
                            
                        </div>
                    </div>
                    <div className="footer_element">
                        <h3 className="margin__top header_description white_font text_align_left">SHA7EN</h3>
                        <h3 className="margin__top unbold header_description white_font text_align_left">ABOUT US</h3>
                        <h3 className="margin__top unbold header_description white_font text_align_left">HOW IT WORKS</h3>

                    </div>
                    <div className="footer_element">
                        <h3 className="margin__top header_description white_font text_align_left">LEGAL</h3>
                        <h3 className="margin__top unbold header_description white_font text_align_left">PRIVACY POLICY</h3>
                        <h3 className="margin__top unbold header_description white_font text_align_left">TERMS & CONDITIONS</h3>
                    </div>
                    <div className="footer_element">
                        <h3 className="margin__top header_description white_font text_align_left">QUICK LINKS</h3>
                        <h3 className="margin__top unbold header_description white_font text_align_left">HOME</h3>
                        <h3 className="margin__top unbold header_description white_font text_align_left">INSTALL CHARGER</h3>
                    </div>
                </div>
            </footer>

        </>
     );
}
 
export default Footer;