
import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR
} from "../constants/movieConstant"



export const loadMovies = () => async dispatch => {

    try {
        dispatch({type: FETCH_MOVIES_REQUEST})

        const url = "http://127.0.0.1:8000/movie"
        const response = await fetch(url) ;
        const responseBody = await response.json()

        dispatch({
            type: FETCH_MOVIES_SUCCESS,
            data: responseBody
        })
    } catch (error) {
        console.log(error)

        dispatch({
            type: FETCH_MOVIES_ERROR,
            message: error
        })
    }
}