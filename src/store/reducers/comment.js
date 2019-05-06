import {LOAD_COMMENTS, DELETE_COMMENT} from "../actionTypes";

function comments(state=[], action){
    switch(action.type){
        case LOAD_COMMENTS:
            return [...action.comments];
        case DELETE_COMMENT:
            return state.filter(comment=> comment._id !== action.id);
        default:
            return state;
    }
}

export default comments;