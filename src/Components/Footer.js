import React, { useState, useEffect } from 'react'
import './Css/Footer.css';
import { useTranslation } from "react-i18next";
import i18next from 'i18next'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";
import { UserAuth } from '../context/AuthContext'
import { Link } from "react-router-dom"

import logoen from '../images/Sha7enLogo_White_200.png';
import logoar from '../images/arShahen.png';



const Footer = ({ links }) => {
    const { t } = useTranslation()
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
        <div>
            <footer className="footer">
                <div className="l-footer">
                    <h1>
                        <img
                            src={localStorage.getItem('i18nextLng') === "ar"
                                ? logoar : logoen}
                            width="150"
                            alt='logo' />
                    </h1>
                    <div className="" >
                        <p className='socialTitle'>
                            { t('FOLLOW US')}
                        </p>
                    <div className="socialLinks">
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
                </div>
                <ul className="r-footer">
                    <li className="features">
                        <h2>
                        { t('SHA7EN')}
                        </h2>
                        <ul className="box">
                            <li><a href="#">{ t('ABOUT US')}</a></li>
                            <li><a href="#">{ t('HOW IT WORKS')}</a></li>
                            {isAdmin &&
                            <Link to={"/sha7en/AdminPanel"} className="margin__top unbold header_description white_font text_align_left">
                                Admin Panel
                            </Link>
                        }
                        </ul>
                    </li>
                    <li className="features">
                        <h2>
                        { t('LEGAL')}
                        </h2>
                        <ul className="box">
                            <li><a href="#">{ t('PRIVACY POLICY')}</a></li>
                            <li><a href="#">{ t('TERMS & CONDITIONS')}</a></li>
                        </ul>
                    </li>
                    <li className="features">
                        <h2>
                        { t('QUICK LINKS')}
                        </h2>
                        <ul class="box">
                            <li><a href="#">{ t('HOME')}</a></li>
                            <li><a href="#">{ t('INSTALL CHARGER')}</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="b-footer">
                    <p>
                    { t('© 2022 | Copyright Sha7en.ae. | All rights reserved.')}
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
