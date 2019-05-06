import {LOAD_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, RESET_COMMENTS} from "../actionTypes"
import {setNotification, removeNotification} from "./notifications"
import {setError, removeError} from "./errors"
import {internalServerCall} from "../../services"

export function loadComments (drinkId){
    return dispatch => {
        return new Promise((resolve, reject)=>{
            internalServerCall('get', `drinks/${drinkId}/comments`)
                .then(res => {
                    let {comments} = res.data;
                    dispatch({
                        type: LOAD_COMMENTS,
                        comments
                    })
                    setNotification("Successfully posted comment.")
                    resolve()
                })
                .catch(err=> {
                    dispatch(setError(err.response.data.error.message))
                    reject()
                })
        })
    }
}

