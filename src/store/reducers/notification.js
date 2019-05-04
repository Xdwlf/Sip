import {SET_NOTIFICATION, REMOVE_NOTIFICATION} from '../actionTypes'

function notification(state=null, action){
    switch(action.type){
        case SET_NOTIFICATION:
            return action.notification;
        case REMOVE_NOTIFICATION:
            return null;
        default:
            return state;
    }
}

export default notification