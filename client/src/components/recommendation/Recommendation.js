import ListMovie from "../listmovie/ListMovie";
import "./recommendation.css"


function Recommendation(props) {
    

    return ( 
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            
          <div className="carousel-item active">
            <ListMovie movies = {props.movies.slice(0,4)}/>
          </div>
          <div className="carousel-item">
            <ListMovie movies = {props.movies.slice(4,8)}/>
          </div>
          <div className="carousel-item">
          <ListMovie movies = {props.movies.slice(8,12)}/>
          </div>
          
        </div>
        <a className="carousel-control-prev ben-left" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon " aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next ben-right" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
     );
}

export default Recommendation;