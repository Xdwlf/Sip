import {SET_NOTIFICATION, REMOVE_NOTIFICATION} from "../actionTypes"

export function setNotification(notification){
    return {
        type: SET_NOTIFICATION,
        notification
    }
}

export function removeNotification(){
    return {
        type: REMOVE_NOTIFICATION
    }
}