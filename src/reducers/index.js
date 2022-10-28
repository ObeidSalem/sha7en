import {combineReducers} from "redux";
import loggedReducer from "./isLogged"
import vehicleModelReducer from  "./vehicleModel"

const allReducers = combineReducers({
    isLogged: loggedReducer,
    vehicleModel: vehicleModelReducer
})

export default allReducers;