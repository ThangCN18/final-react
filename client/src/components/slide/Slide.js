import "./slide.css"
import {Link} from "react-router-dom"


function Slide() {
    return (  
     
        <div id="demo" className="carousel slide my-1 slide-root" data-ride="carousel">
          <div className="slide-content-position">
            <h3 className="text-warning logo-slide">Movie Play</h3>
            <h3>Nơi chia sẽ niềm vui cho bạn!</h3>
            <Link to="/movies">
              <button type="button" class="btn btn-outline-light ">Xem Ngay</button>
            </Link>
            
          </div>
          {/* Indicators */}
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to={0} className="active" />
            <li data-target="#demo" data-slide-to={1} />
            <li data-target="#demo" data-slide-to={2} />
          </ul>
          {/* The slideshow */}
          <div className="carousel-inner slider-size">
            <div className="carousel-item active">
              <video width="100%" height="100%" loop="true"  autoplay="true" muted>
                  <source src={"http://127.0.0.1:8000/movie/slider1.mp4"} type={"video/mp4"} />
              </video>
            </div>
            <div className="carousel-item">
              <video width="100%" height="100%" loop="true"  autoplay="true" muted>
                  <source src={"http://127.0.0.1:8000/movie/slider2.mp4"} type={"video/mp4"} />
              </video>
            </div>
            <div className="carousel-item">
              <video width="100%" height="100%" loop="true"  autoplay="true" muted>
                  <source src={"http://127.0.0.1:8000/movie/slider3.mp4"} type={"video/mp4"} />
              </video>
            </div>
          </div>
          {/* Left and right controls */}
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
        
        

        
    );
}

export default Slide;