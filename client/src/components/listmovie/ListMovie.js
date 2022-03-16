import "./listmovie.css"

import ItemMovie from "../itemmovie/ItemMovie";

function ListMovie(props) {
    const movies = props.movies
    
    return (
        <div className="row mx-auto my-4 w-100  list-item-movie  ">
           {movies.map((movie)=> <ItemMovie key={movie._id} movie={movie}/>)}

        </div>
    );
}

export default ListMovie;