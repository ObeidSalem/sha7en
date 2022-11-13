import "../Components/Css/NavBar.css";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { NavLink } from "react-router-dom";
import Localization from '../Components/Localization';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import i18next from "i18next";
// React icons 
import {
  AiOutlineMail, AiOutlineHome,
  AiOutlineInfoCircle, AiOutlinePhone,
  AiFillInstagram, AiOutlineTwitter,
}
  from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
// Images Used 
import logoen from '../images/Sha7enLogo_200.png';
import logoar from '../images/arShahen.png';
import logoen2 from '../images/Sha7enLogo_White_200.png';

const Navbar = () => {
  const { t } = useTranslation();

  const navigate = useNavigate()

  const { user, logOut } = UserAuth()

  {/*
  const handleSignOut = async () => {
    try {
      await logOut()
      navigate("/sha7en/")
    } catch (error) {
      console.log(error)
    }
  }
*/}

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClickAway = () => setClick(false);

  /*Switcher local */ 
  const onChangeLanguage = checked => {
    // if checked is false, French should be adopted
    if (!checked) {
      i18next.changeLanguage("ar");
    } else {
      i18next.changeLanguage("en");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/sha7en/" className="nav-logo">
            <img
              className="nav_logo_img"
              src={localStorage.getItem('i18nextLng') === "ar"
                ? logoar : logoen}
              width="150"
              alt='logo' />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/*Logo for sidebar mobile*/}
            <div className="logoSidebar">
              <NavLink exact to="/sha7en/" className="">
                <img
                  className="nav_logo_sidebar"
                  src={localStorage.getItem('i18nextLng') === "ar"
                    ? logoar : logoen2}
                  width="150"
                  alt='logo' />
              </NavLink>
            </div>

            {/* The links pages Navbar */}

            <li className="">
              <NavLink
                exact
                to="/sha7en/contact"
                activeClassName="active"
                className="nav_links_login"
                onClick={handleClick}
              >
                <FaUserAlt style={{ color: '#fff' }} />&nbsp;{t(' Sign in/Sign up ')}
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                exact
                to="/sha7en/Home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <AiOutlineHome style={{ color: '#064288' }} />&nbsp;{t('Home')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/sha7en/About"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <AiOutlineInfoCircle style={{ color: '#064288' }} />&nbsp;{t('About Us')}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/sha7en/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <AiOutlinePhone style={{ color: '#064288' }} />&nbsp;{t('Contact Us')}
              </NavLink>
            </li>


            {/* Languages Switsher */}
            <div className="switchertwo">
              <Localization onChangeLanguage={onChangeLanguage} />
            </div>


            {/*Soial Media Links for Sidebar Mobile */}
            <div className="socialIcons">
              <div className="socialIcons_title">
                <p>{t('FOLLOW US')}</p>
                <AiFillInstagram className="socialIcons_items" />
                <AiOutlineTwitter className="socialIcons_items" />
                <AiOutlineMail className="socialIcons_items" />
              </div>
            </div>
          </ul>


          {/* Languages Switsher */}
          <div className="swit">
            <Localization onChangeLanguage={onChangeLanguage} />
          </div>

          {/**/}
          {user &&
            <Icon className="auth_icon" icon="healthicons:ui-user-profile-outline" />
          }

          {/*Icon Menue The link in html file */}
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </ClickAwayListener>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
