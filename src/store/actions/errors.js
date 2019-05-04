import {SET_ERROR, REMOVE_ERROR} from "../actionTypes"

export function setError(error){
    return {
        type: SET_ERROR,
        error
    }
}

export function removeError(){
    return {
        type: REMOVE_ERROR
    }
}