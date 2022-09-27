// import './Css/Cards.css';
import ChargersList from '../Components/ChargersList';


const ChargersCards = (props) => {
    return ( 
        <div className="vehicles__container">
            <ChargersList
                chargers={props.chargers}
                model={props.selectedModel}
            div/>
        </div>
     );
}
 
export default ChargersCards;