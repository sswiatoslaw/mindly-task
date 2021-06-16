import * as types from './types'

const initialState = {
    pshycholog: 0,
    date: "12",
    month: "Июль",
    time: "18:00"

}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.SEND_DATE:
            return {...state, date: action.payload}
        case types.SEND_MONTH:
            return {...state, month: action.payload}
        case types.SEND_TIME:
            return {...state, time: action.payload}
        case types.SEND_PSYCHOLOG:
            return {...state, pshycholog: action.payload}
        default: return state;
    }
}

export default reducer