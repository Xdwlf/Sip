import {SET_CURRENT_USER} from '../actionTypes';
import {internalServerCall, axiosTokenHeader} from '../../services'
import {setError, removeError} from './errors'
import {setNotification, removeNotification} from "./notifications";

export function setCurrentUser(user){
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
                handleUserData(res, resolve, dispatch, "You have successfully signed up.")
            })
            .catch(err=>{
                handleError(err, reject, dispatch)
            })
        })
    }
}

export function signinUser(userData){
    return dispatch => {
        return new Promise((resolve, reject)=> {
            internalServerCall("post", "auth/signin", userData)
            .then(res=> {
                handleUserData(res, resolve, dispatch, "Welcome back.")
            })
            .catch(err=>{
                handleError(err, reject, dispatch)
            })
        })
    }
}

export function logoutUser(){
    return dispatch => {
        localStorage.clear();
        dispatch(setCurrentUser({}))
    }
}

const handleUserData = (res, resolve, dispatch, notification) => {
    let {id, username, email, profileImgUrl, token} = res.data;
    localStorage.setItem('jwtToken', token)
    dispatch(setCurrentUser({id, username, email, profileImgUrl}))
    dispatch(removeError());
    dispatch(setNotification(notification))
    resolve()
}

const handleError = (err, reject, dispatch) => {
    dispatch(setError(err.response.data.error.message))
    reject();
}