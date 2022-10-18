import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Css/NavBar.css';
import logo from '../images/Sha7enLogo_200.png'
import { Icon } from '@iconify/react';
import {UserAuth} from '../context/AuthContext'


const NavBar = () => {
    const navigate  = useNavigate()

    const {user, logOut} = UserAuth()

    const handleSignOut = async () => {
        try {
          await logOut()
          navigate("/sha7en/")
        } catch (error) {
          console.log(error)
        }
      }

    return ( 
        <nav className="navbar">
            <div className="navbar_container">
                <div className="nav_links">
                    <Link className="nav_item" to="/sha7en/"><img className="nav_logo" src={logo} width="150" alt='logo'/></Link>
                    <div className="nav_links_left">
                        <Link className="nav_item" to="/sha7en/Home">Home</Link>
                        <Link className="nav_item" to="/sha7en/Vehicles">About Us</Link>
                        {/* <Link className="nav_item" to="/sha7en/Partners">Contact Ue</Link> */}
                        {user &&
                            <Icon className="auth_icon" onClick={handleSignOut} icon="majesticons:logout-line" />
                        }  
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;