import {SET_CURRENT_USER, LOGOUT_USER} from '../actionTypes'

function currentUser(state= {}, action){
    switch(action.type){
        case SET_CURRENT_USER:
            return {...action.user}
        case LOGOUT_USER:
            return {}
        default:
            return state;
    }
}

export default currentUser;