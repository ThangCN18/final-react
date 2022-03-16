import {useSelector} from "react-redux"
import { useState, useEffect } from "react";

import Footer from "../components/footer/Footer";
import ListMovie from "../components/listmovie/ListMovie";
import Navbar from "../components/navbar/Navbar";
import Search from "../components/search/Search";
import Genre from "../components/genre/Genre";


function MoviesPage() {

    useEffect(()=>{
        window.scrollTo(0,-document.body.scrollHeight);
       },[])
    const moviesData = useSelector(state =>state.movies.data)
    const [textSearch, setTextSearch] = useState("");
    const onChangeTextSearch = (text)=>{
        setTextSearch(text)
    }

    const [selectGenre, setSelectGenre] = useState("All");
    const handleSelectGenre= (text)=>{
        setSelectGenre(text)
    }


    const movies = moviesData.filter(movie =>{
        if(movie.name.toLowerCase().includes(textSearch.toLowerCase())){
            if(selectGenre==="All"){
                return movie
            }else if(movie.genre === selectGenre){
                return movie
            }
        }return null
    })

    return ( 
        <div>
            <Navbar liItem="movies"/>
            <Search textSearch={textSearch} onChangeTextSearch={onChangeTextSearch}/>
            <Genre selectGenre={selectGenre} handleSelectGenre={handleSelectGenre}/>
            <div style={{width: "80%", margin:"0 auto"}}>
            <ListMovie movies={movies}/>
            </div>
            
            

            <Footer/>
        </div>
     );
}

export default MoviesPage;