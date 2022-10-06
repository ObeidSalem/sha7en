import './Css/Home.css';
import {useState, useEffect} from 'react'
import ChargersCards from './ChargersCards';


const Chargers = (props) => {

    const [model, setModel] = useState(props.selectedModel)


    return ( 
        <>
            <div className="home_vehicles page_padding text_align_left">
                <h1 className="black_font vehicles_title">Tesla Model 3{props.selectedModel} Compatible Chargers</h1>
                <div className="vehicles_container">
                    <ChargersCards 
                        chargers={props.chargers}
                        model={props.selectedModel}
                    />
                </div>
                <div className="vehicles__container">
                
                </div>
            </div>
        </>
     );
}
 
export default Chargers;