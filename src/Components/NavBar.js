import { Link } from 'react-router-dom'
import './Css/NavBar.css';
import logo from '../images/Sha7enLogo_200.png'


const NavBar = () => {
    return ( 
        <nav className="navbar">
            <div className="navbar_container">
                <ui className="nav_links">
                    <Link className="nav_item" to="/sha7en/"><it ><img className="nav_logo" src={logo} width="150" alt='logo'/></it></Link>
                    <div className="nav_links_left">
                        <Link className="nav_item" to="/sha7en/About"><it >About</it></Link>
                        <Link className="nav_item" to="/sha7en/Vehicles"><it >Vehicles</it></Link>
                        <Link className="nav_item" to="/sha7en/Partners"><it>Partners</it></Link>
                    </div>
                </ui>
            </div>
        </nav>
     );
}
 
export default NavBar;