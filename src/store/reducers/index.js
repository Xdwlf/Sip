import {combineReducers} from 'redux'
import currentUser from "./user"
import error from './error'
import drinks from "./drink"
import comments from "./comment"

const rootReducer = combineReducers({
    currentUser,
    error,
    drinks,
    comments

})

export default rootReducer