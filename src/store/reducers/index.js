import {combineReducers} from 'redux'
import currentUser from "./user"
import error from './error'
import drinks from "./drink"
import comments from "./comment"
import notification from './notification'

const rootReducer = combineReducers({
    currentUser,
    error,
    drinks,
    comments,
    notification

})

export default rootReducer