
const initState = {
    Model: "",
    Brand: "",
    ModelYear: "",
    ModelColor: "",
    ChargerPort: "",
    SupportedChargers: [],
}

const vehicleModelReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_VEHICLE_MODEL':
            return {
                ...state,
                Model: action.payload,
            };

        case 'SET_VEHICLE_BRAND':
            return {
                ...state,
                Brand: action.payload,
            };

        case 'SET_VEHICLE_VIN':
            return {
                ...state,
                VIN: action.payload,
            };

        case 'SET_VEHICLE_YEAR':
            return {
                ...state,
                ModelYear: action.payload,
            };

        case 'SET_VEHICLE_COLOR':
            return {
                ...state,
                ModelColor: action.payload,
            };

        case 'SET_CHARGER_PORT':
            return {
                ...state,
                ChargerPort: action.payload,
            };

        case 'SET_SUPPORTED_CHARGERS':
            return {
                ...state,
                SupportedChargers: action.payload,
            };

        default:
            return state;
    }
}

export default vehicleModelReducer;