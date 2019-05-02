import {FETCH_DRINKS, VIEW_DRINK} from '../actionTypes'
import {externalApiCall} from "../../services"

export const fetchDrinks= (type, data)=> {
    return dispatch => {
        return externalApiCall(type, data)
                .then(res=> dispatch({
                    type: FETCH_DRINKS,
                    drinks: res
                }))
                .catch(err=> {

                })
    }
}

export const viewDrink= (id) => {
    return dispatch => {
        return externalApiCall("drinkId", id)
                .then(res=> dispatch({
                    type: VIEW_DRINK,
                    drinks: res
                }))
                .catch(err => {
                    
                })
    }
}