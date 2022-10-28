import React, { useState, useEffect } from 'react'
import HeaderLogo from '../images/Sha7enLogo_White_200.png'
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";
import { UserAuth } from '../context/AuthContext'

// import "../styles/Links.css";

const Footer = ({ links }) => {

    const { user } = UserAuth()
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {

        if (user) {
            console.log("user", user.email)
            if(user.email == "o.salem322@gmail.com" || user.email == "hamzarhindi@gmail.com" || user.email == "ezsha7en@gmail.com" ){
                setIsAdmin(true)
            }
        } 
        else { setIsAdmin(false) }
    }, [user])

    return (
        <>
            <footer className="home_Header page_padding footer_container">
                <div className="text_align_left">
                    <img className="header_logo" src={HeaderLogo} width="200" alt='logo' />
                </div>
                <div className="margin__top footer_content">
                    <div className="footer_element">
                        <h3 className="header_description white_font text_align_left">FOLLOW US</h3>
                        <div className="margin__top header_description white_font text_align_left linksSocial">
                            <a
                                href="https://instagram.com/sha7en.ae?igshid=YmMyMTA2M2Y=">
                                <AiOutlineInstagram className="iconsocial" />
                            </a>
                            <a href="https://twitter.com/Sha7enAe?t=Mg5KrWiHZUNBMM2vDZK5dg&s=09">
                                <AiOutlineTwitter className="iconsocial" />
                            </a>
                            <a className="mailto"
                                href="mailto:info@sha7en.ae">
                                <AiOutlineMail className="iconsocial" />
                            </a>
                        </div>
                    </div>
                    <div className="footer_element">
                        <h3 className="margin__top header_description white_font text_align_left">SHA7EN</h3>
                        <h3 className="margin__top unbold header_description white_font text_align_left">ABOUT US</h3>
                        <h3 className="margin__top unbold header_description white_font text_align_left">HOW IT WORKS</h3>
                        {isAdmin &&
                            <Link to={"/sha7en/AdminPanel"} className="margin__top unbold header_description white_font text_align_left">
                                Admin Panel
                            </Link>
                        }


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