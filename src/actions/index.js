export const signIn = () => {
    return {
        type: 'SIGN_IN',
    }
}

export const SET_VEHICLE_MODEL = (payload) => {
    return {
        type: 'SET_VEHICLE_MODEL',
        payload: payload,
    }
}

export const SET_VEHICLE_BRAND = (payload) => {
    return {
        type: 'SET_VEHICLE_BRAND',
        payload: payload,
    }
}

export const SET_VEHICLE_VIN = (payload) => {
    return {
        type: 'SET_VEHICLE_VIN',
        payload: payload,
    }
}

export const SET_VEHICLE_YEAR = (payload) => {
    return {
        type: 'SET_VEHICLE_YEAR',
        payload: payload,
    }
}

export const SET_VEHICLE_COLOR = (payload) => {
    return {
        type: 'SET_VEHICLE_COLOR',
        payload: payload,
    }
}

export const SET_CHARGER_PORT = (payload) => {
    return {
        type: 'SET_CHARGER_PORT',
        payload: payload,
    }
}

export const SET_SUPPORTED_CHARGERS = (payload) => {
    return {
        type: 'SET_SUPPORTED_CHARGERS',
        payload: payload,
    }
}