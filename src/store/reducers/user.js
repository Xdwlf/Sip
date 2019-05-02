import {SET_CURRENT_USER, LOGOUT_USER} from '../actionTypes'

function currentUser(state= null, action){
    switch(action.type){
        case SET_CURRENT_USER:
            return {...state, currentUser: action.user}
        case LOGOUT_USER:
            return {...state, currentUser:null}
        default:
            return state;
    }
}

export default currentUser;