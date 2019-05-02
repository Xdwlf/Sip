import {SET_ERROR, REMOVE_ERROR} from '../actionTypes'

function error(state=null, action){
    switch(action.type){
        case SET_ERROR:
            return {...state, error: action.error};
        case REMOVE_ERROR:
            return {...state, error: null}
        default:
            return state;
    }
}

export default error