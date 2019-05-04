import {SET_CURRENT_USER} from '../actionTypes';
import {internalServerCall, axiosTokenHeader} from '../../services'

export function setCurrentUser(user){
    console.log('setting user')
    return {
        type: SET_CURRENT_USER,
        user
    }
}


export function signupUser(userData){
    return dispatch => {
        return new Promise((resolve, reject)=> {
            internalServerCall("post", "auth/signup", userData)
            .then(res => {
                handleUserData(res, resolve, dispatch)
            })
            .catch(handleError)
        })
    }
}

export function signinUser(userData){
    return dispatch => {
        return new Promise((resolve, reject)=> {
            internalServerCall("post", "auth/signin", userData)
            .then(res=> {
                handleUserData(res, resolve, dispatch)
            })
            .catch(handleError)
        })
    }
}

export function logoutUser(){
    return dispatch => {
        localStorage.clear();
        dispatch(setCurrentUser({}))
    }
}

const handleUserData = (res, resolve, dispatch) => {
    let {id, username, email, profileImgUrl, token} = res.data;
    localStorage.setItem('jwtToken', token)
    dispatch(setCurrentUser({id, username, email, profileImgUrl}))
    resolve()
}

const handleError = (err) => {

}