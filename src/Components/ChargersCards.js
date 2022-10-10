// import './Css/Cards.css';
import ChargersList from '../Components/ChargersList';


const ChargersCards = (props) => {
    return ( 
        <div className="vehicles__container">
            <ChargersList
                fixedFees={props.fixedFees}
                model={props.selectedModel}
                chargers={props.chargers.filter(charger => {
                    if ( charger.charger_id !="000"){
                        return !charger.charger_id.includes(charger)
                    }

                    // else if (value.title.toLocaleLowerCase().includes(Searchterm.toLocaleLowerCase())){
                    //     return value
                    // }

                })}
            div/>
        </div>
     );
}
 
export default ChargersCards;