import {SET_ERROR, REMOVE_ERROR} from '../actionTypes'

function error(state=null, action){
    switch(action.type){
        case SET_ERROR:
            return action.error;
        case REMOVE_ERROR:
            return null;
        default:
            return state;
    }
}

export default error