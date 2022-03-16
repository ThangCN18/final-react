import { Route, Routes} from "react-router-dom"
import {useEffect, } from "react"
import {useDispatch} from "react-redux"

import './App.css';
import DetailMoviePage from "./pages/DetailMoviePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MoviesPage from "./pages/MoviesPage";
import RegisterPage from "./pages/RegisterPage";
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR
} from "./redux/constants/movieConstant"

function App() {
   
    const dispatch = useDispatch()

    useEffect( 
      async ()=>{
        try {
         dispatch({type: FETCH_MOVIES_REQUEST})
         const url = "http://127.0.0.1:8000/movie/"
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
       
    },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/movies" element={<MoviesPage/>}/>
        <Route path="/movie/:name" element={<DetailMoviePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>

   
  );
}

export default App;
