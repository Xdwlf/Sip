import {FETCH_DRINKS, VIEW_DRINK} from "../actionTypes"

function drinks(state={drinkList:[],
                        viewedDrink: null}, action){
    switch(action.type){
        case FETCH_DRINKS:
            return {...state, drinkList: [...action.drinks] };
        case VIEW_DRINK:
            return {...state, viewedDrink: action.drink}
        default:
            return state;
    }
}

export default drinks