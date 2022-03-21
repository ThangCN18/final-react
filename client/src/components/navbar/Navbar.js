import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { FETCH_LOGOUT } from "../../redux/constants/userConstant";
import "./navbar.css"


function Navbar(props) {
  const user = useSelector(state => state.user.data) 
  const liItem = props.liItem
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch({ type: FETCH_LOGOUT })
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >

      <Link className="navbar-brand text-logo text-warning mx-4" to="/"  >
        MOVIE PLAY
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        {liItem === "home" ?

          <ul className="navbar-nav mr-auto navbar_text">

            <li className="nav-item active">
              <Link className="nav-link  " to="/">Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/movies">Movies </Link>
            </li>
          </ul>
          :
          <ul className="navbar-nav mr-auto navbar_text">

            <li className="nav-item ">
              <Link className="nav-link  " to="/">Home </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link " to="/movies">Movies </Link>
            </li>
          </ul>
        }
        {user.user ?
          <span className="navbar-nav">
            <div className="mx-auto ">
              <p className="text-light float-left mx-3 my-2">Hi  {user.user.username} !</p>
              <i class="fa fa-phone float-left mr-3 mb-2 text-light" style={{ marginTop: "12px", cursor: "pointer" }} aria-hidden="true"></i>
              <i class="fa fa-bell float-left mr-3 mb-2 text-light" style={{ marginTop: "12px", cursor: "pointer" }} aria-hidden="true"></i>

            </div>
            <br />

            <a><button onClick={handleLogOut} type="button" className="btn btn-outline-warning">Logout </button></a>

          </span>


          : <span className="navbar-nav">
            <div className="mx-auto ">
              <i class="fa fa-phone float-left ml-3 mb-2 text-light" style={{ marginTop: "12px", cursor: "pointer" }} aria-hidden="true"></i>
              <i class="fa fa-bell float-left  mx-3 mb-2 text-light" style={{ marginTop: "12px", cursor: "pointer" }} aria-hidden="true"></i></div>
            <Link to="/login"><button type="button" className="btn btn-outline-warning ">Login</button></Link>
          </span>}
      </div>
    </nav>
  );
}

export default Navbar;