import {FETCH_DRINKS} from "../actionTypes"

function drinks(state=[], action){
    switch(action.type){
        case FETCH_DRINKS:
            return {...state, drinks: action.drinks};
        default:
            return state;
    }
}

export default drinks