import { Link } from 'react-router-dom'
import './Css/NavBar.css';
import logo from '../images/Sha7enLogo_200.png'


const NavBar = () => {
    return ( 
        <nav className="navbar">
            <div className="navbar_container">
                <div className="nav_links">
                    <Link className="nav_item" to="/sha7en/"><img className="nav_logo" src={logo} width="150" alt='logo'/></Link>
                    <div className="nav_links_left">
                        <Link className="nav_item" to="/sha7en/About">About</Link>
                        <Link className="nav_item" to="/sha7en/Vehicles">Vehicles</Link>
                        <Link className="nav_item" to="/sha7en/Partners">Partners</Link>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;