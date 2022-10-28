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