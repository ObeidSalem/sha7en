// import './Css/Cards.css';
import HomeVehiclesList from '../Components/HomeVehiclesList';


const Cards = ({vehicles}) => {
    return ( 
        <div className="vehicles__container">
            <HomeVehiclesList
                vehicles={vehicles}
            div/>
        </div>
     );
}
 
export default Cards;