import * as types from './types'

export const sendDate = (date) => ({
    type: types.SEND_DATE,
    payload: date
})

export const sendMonth = (month) => ({
    type: types.SEND_MONTH,
    payload: month
})

export const sendTime = (time) => ({
    type: types.SEND_TIME,
    payload: time
})

export const sendPsycholog = (name) => ({
    type: types.SEND_PSYCHOLOG,
    payload: name
})