
const initState = {
    Model: "",
    Brand:"",
    ModelYear: "",
    ModelColor:"",
    ChargerPort: "",
    SupportedChargers:[],    
}

const vehicleModelReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_VEHICLE_MODEL':
            return {
                ...state,
                Model: action.payload,
            };    
        default:
            return state;
    }
}

export default vehicleModelReducer;