import {useSelector} from "react-redux"
import {useEffect} from "react"

import Footer from "../components/footer/Footer";
import ListMovie from "../components/listmovie/ListMovie";
import Navbar from "../components/navbar/Navbar";
import "./css/home.css"
import Slide from "../components/slide/Slide";

function HomePage() {

    useEffect(()=>{
        window.scrollTo(0,-document.body.scrollHeight);
       },[])
    const moviesData = useSelector(state =>state.movies.data)
    const movieNB = moviesData.filter(movie=>{
        if(movie.genre==="Hành Động"){
            return movie
        }return null
    })
    const movieCT = moviesData.filter(movie=>{
        if(movie.genre==="Cổ Trang"){
            return movie
        }return null
    })
    const movieTC = moviesData.filter(movie=>{
        if(movie.genre==="Tình Cảm"){
            return movie
        }return null
    })
    const movieHH = moviesData.filter(movie=>{
        if(movie.genre==="Hoạt Hình"){
            return movie
        }return null
    })

    return (
        <div>
            <Navbar liItem="home"/>
            <Slide/>
            <div className="container">
            <h4 className="mt-5 ml-4 text-warning text-left">Phim Nổi Bật</h4>
            <ListMovie movies={movieNB}/>
            <hr style={{height: "3px", width: "97%", marginLeft:"2%"}}></hr>
            <h4 className="mt-5 ml-4 text-warning text-left">Phim Cổ Trang</h4>
            <ListMovie movies={movieCT}/>
            <hr style={{height: "3px", width: "97%", marginLeft:"2%"}}></hr>
            <h4 className="mt-5 ml-4 text-warning text-left">Phim Tình Cảm</h4>
            <ListMovie movies={movieTC}/>
            <hr style={{height: "3px", width: "97%", marginLeft:"2%"}}></hr>
            <h4 className="mt-5 ml-4 text-warning text-left">Phim Hoạt Hình</h4>
            <ListMovie movies={movieHH}/>
            <hr style={{height: "3px", width: "97%", marginLeft:"2%"}}></hr>
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;