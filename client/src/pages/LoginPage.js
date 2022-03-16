import { Link , useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import "./css/login.css"
import {
  FETCH_LOGIN_ERROR,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS

} from "../redux/constants/userConstant"
function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const message = useSelector(state=>state.user.message)
  
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      dispatch({ type: FETCH_LOGIN_REQUEST })
      const url = "http://localhost:8000/user/login"
      const user = { username: userName, password: password }
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        type: "cors",
        method: "POST",
        body: JSON.stringify(user)

      })
      
      const responseBody = await response.json()
      if(typeof responseBody !== "string"){
        dispatch({
          type: FETCH_LOGIN_SUCCESS,
          data: responseBody
        })
        navigate("..")
        
      }else{
        dispatch({
          type: FETCH_LOGIN_ERROR,
          message:  responseBody
        })
      }
        
      
      
    } catch (error) {
      dispatch({
        type: FETCH_LOGIN_ERROR,
        message:  "error"
      })

    }

  }
  return (
    <div className="login">
      <div className="main" >
        <form className="form-login" onSubmit={handleLogin}>
        <i class="fa fa-chevron-left float-left back-icon" onClick={()=>{navigate("..")}} style={{fontSize: "18px"}} aria-hidden="true"></i><br/>
          <h3 className="heading text-warning my-2 " >Login</h3>
          <div className="spacer"></div>

          <div className="form-group ">
            <label for="fullname" className="form-label text-light float-left">User Name</label>
            <input type="fullname" name="name" placeholder="abc123" value={userName} onChange={(e) => setUserName(e.target.value)} className="form-control" />
            <span className="form-message"></span>
          </div>
          <div className="form-group">
            <label for="password" className="form-label text-light float-left">Password</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="abc" className="form-control" />

          </div>
          <p className="text-danger">{message}</p>
          <button type="submit" className="btn btn-warning btn-ms text-light my-1" >Login</button>
          <div>
            <p className="text-light float-left ml-2">Do not have an account?</p>
            <Link to="/register" style={{ float: "right", color: "yellow", marginRight: "12px", textDecoration: "none" }}>Register</Link>
          </div>


        </form>
      </div>
    </div>
  );
}

export default LoginPage;