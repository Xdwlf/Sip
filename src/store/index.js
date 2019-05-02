import rootReducer from "./reducers";
import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"

const devTools = (typeof window === 'object' && 
        window.__REDUX_DEVTOOLS_EXTENSION__)?
        window.__REDUX_DEVTOOLS_EXTENSION__(): compose

export function configureStore(){
    const store = createStore(rootReducer,
        compose(applyMiddleware(thunk),
        devTools
        )
    )
    return store;
}
