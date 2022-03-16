import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import "./css/register.css"
function RegisterPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e)=>{
    e.preventDefault()
    if(email.length<1){
      setMessage("Please enter Email!")
    }else if(userName.length<1){
      setMessage("Please enter UserName!")
    }else if(password.length<1){
      setMessage("Please enter Password!")
    }else{
      
      const url = "http://localhost:8000/user/register"
      const user = {email: email, username: userName, password: password }
      await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        type: "cors",
        method: "POST",
        body: JSON.stringify(user)

      }).then((refult => navigate("../login")))

    }
  }

    return ( 
        <div className="register ">
      <div style={{}} className="main" >
        <form className="form-register" onSubmit={handleRegister}>
        <i class="fa fa-chevron-left float-left back-icon" onClick={()=>{navigate("..")}} style={{fontSize: "18px"}} aria-hidden="true"></i><br/>
          <h3 className="heading text-warning " >Register</h3>
          <div className="spacer"></div>
          <div className="form-group ">
            <label for="fullname" className="form-label text-light float-left">Email</label>
            <input type="fullname" name="name" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="abc.@gmail.com" className="form-control" />
            <span className="form-message"></span>
          </div>

          <div className="form-group ">
            <label for="fullname" className="form-label text-light float-left">User Name</label>
            <input type="fullname" name="name" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="abc123" className="form-control" />
            <span className="form-message"></span>
          </div>
          <div className="form-group">
            <label for="password" className="form-label text-light float-left">Password</label>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="abc" className="form-control" />
            
          </div>
          <p className="text-danger">{message}</p>
          <button type="submit" className="btn btn-warning btn-ms text-light my-1" >Register</button>
          
          <div>
          <p className="text-light float-left ml-2">Do you already have an account?</p>
          <Link to="/login" style={{color: "yellow", marginRight: "10px", textDecoration: "none"}}>Login</Link>
          </div>
          

        </form>
      </div>
    </div>
     );
}

export default RegisterPage;