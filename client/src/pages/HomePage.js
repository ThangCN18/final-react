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
    const filterMovieGenre = (value)=>{
        return moviesData.filter(movie => movie.genre=== value)
    }
    return (
        <div>
            <Navbar liItem="home"/>
            <Slide/>
            <div className="container">
            <h4 className="mt-5 ml-4 text-warning text-left">Phim Nổi Bật</h4>
            <ListMovie movies={filterMovieGenre("Hành Động")}/>
            <hr style={{height: "3px", width: "97%", marginLeft:"2%"}}></hr>
            <h4 className="mt-5 ml-4 text-warning text-left">Phim Cổ Trang</h4>
            <ListMovie movies={filterMovieGenre("Cổ Trang")}/>
            <hr style={{height: "3px", width: "97%", marginLeft:"2%"}}></hr>
            <h4 className="mt-5 ml-4 text-warning text-left">Phim Tình Cảm</h4>
            <ListMovie movies={filterMovieGenre("Tình Cảm")}/>
            <hr style={{height: "3px", width: "97%", marginLeft:"2%"}}></hr>
            <h4 className="mt-5 ml-4 text-warning text-left">Phim Hoạt Hình</h4>
            <ListMovie movies={filterMovieGenre("Hoạt Hình")}/>
            <hr style={{height: "3px", width: "97%", marginLeft:"2%"}}></hr>
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;