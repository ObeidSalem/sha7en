// import './Css/HomeVehiclesList.css';
// import VehiclePopup from './Components/VehiclePopup';


const HomeVehiclesList = ({vehicles}) => {
    return ( 
        <>
            {vehicles.map(vehicle =>(
                <div className="vehicle__container" key={vehicle.id} id={vehicle.id}>
                    <div className="vehicle__content">
                        <img className="vehicle__image" 
                            src={vehicle.image}
                            onError={(e)=>{e.target.onerror = null; e.target.src="/images/vehicle_cover_alt.jpg"}}
                        />                        
                        <h2 className="left black_font">{vehicle.brand}</h2>
                        <h3 className="left black_font">
                        {vehicle.details}
                        </h3>
                    </div>
                    {/* <VehiclePopup 
                        // description={description} refReports={refReports} book={targetBtn} trigger={reportBtnPopUp} setTrigger={setReportBtnPopUp}
                    >
                        <h3>Report</h3>
                        <hr></hr>
                        <form>
                            <textarea  type="textarea" placeholder="Description:" ></textarea > 
                            <textarea
                                // className="input__style"   
                                placeholder="Description:"
                                rows="4" cols="50"
                                type="text"
                                value={description}
                                onChange={(e) => {setDescription(e.target.value)}}
                            />
                            <br></br>
                            <br></br>
                        </form>
                    </VehiclePopup> */}
                </div>
            ))}
        </>
     );
}
 
export default HomeVehiclesList;