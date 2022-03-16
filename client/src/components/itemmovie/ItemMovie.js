import { Link } from "react-router-dom"
import "./itemMovie.css"

function ItemMovie(props) {
    const urlDetail = '/movie/' + props.movie.name
    return (

        <div className="col-6 col-lg-3  my-2  cart-movie">
            <Link to={urlDetail} style={{textDecoration: "none"}}>
                <div className=" card-movie-dd card bg-dark mx-2" style={{ width: '100%' }}>
                    <img className="card-img-top " src={props.movie.urlimage} height="230px" alt="Card image cap" />
                    <div className="mt-3 mx-2">
                        <p className="card-text text-light text-left name-movie mb-3" >{props.movie.name}</p>
                        
                        
                    </div>
                </div>
                <div className="item-movie-btn">
                    <button type="button" className="btn btn-btn-xem">Xem ngay</button>

                </div>
            </Link>
        </div>



    );
}

export default ItemMovie