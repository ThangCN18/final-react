import {combineReducers} from "redux"

import userReducer from "./userReducer"
import movieReducer from "./movieReducer"

const rootReducer = combineReducers({
    movies: movieReducer,
    user: userReducer
})
const reducers = (state, action) => rootReducer(state, action)

export default reducers