import { useSelector } from 'react-redux'
import {useEffect, useState} from "react"
import { useParams, useNavigate, Link} from 'react-router-dom'
import Footer from "../components/footer/Footer";
import ListMovie from '../components/listmovie/ListMovie';
import Navbar from "../components/navbar/Navbar";
import Recommendation from '../components/recommendation/Recommendation';
import "./css/detai.css"
import ShowComment from '../components/showcomment/ShowComment';
import InputComment from '../components/inputcomment/InputComent';

function DetailMoviePage() {
   const navigate = useNavigate();
   const [comments, setComments] = useState([]);

   const user = useSelector(state => state.user.data)
   const movies = useSelector(state => state.movies.data)
   const { name } = useParams()
   const movie = movies.filter(movie => {
      if (movie.name === name) {
         return movie
      } else {
         return null
      }
   })[0]

  useEffect(async()=>{
   window.scrollTo(0,-document.body.scrollHeight);
   const url = `http://localhost:8000/comment/${movie._id}`
   const commentsBody = await fetch(url)
   const comments = await commentsBody.json()
   const commentsReverse = comments.reverse()
   
   setComments(commentsReverse)

  },[movie])

  const handleComment = (commentss)=>{
      setComments(commentss)
  }
 
  
   const moviesDX = movies.filter(value=>{
      if(value===movie){
         return null
      }return movie
   })

   

   return (
      <div>
         <Navbar />
         <div>
         
         <i  
         className="fa fa-angle-double-left float-left my-3 back-detail p-2 " 
         onClick={()=>navigate("../movies")} 
         aria-hidden="true"> Back</i>
         <div key={movie._id} className="my-1 centent-video" >
            <video width={"70%"} controls loop="true" autoplay="true" >
               <source src={movie.urlmovie} type={"video/mp4"} />
            </video>

         </div>
         
         </div>
        
         <div className='py-3 pl-2 pr-4 content-description'  >
            <div className="p-2 mb-3" style={{ width: "100%", height: "40px", borderRadius: "10px", color: "#e6e5e3" }}>
               <h5 className=" mx-3 text-left float-left mx">Phim: {movie.name}</h5>
               <div className='float-right px-3 py-1' style={{ borderRadius: "5px", border: "solid 1px #cfcfcf" }}>
                  {movie.genre}
               </div>
            </div>
            <hr style={{ background: "#e6e5e3", height: "1.2px", width: "90%"}} />
            <div className='px-5 py-2'>
               <div className='like-movie-dd'>
                  <i class="fa fa-thumbs-up mr-2" aria-hidden="true"></i>
                   1,243 Like
               </div>
               <div className='float-right'>
               <div className='like-movie-dd mr-3'>
                  <i class="fa fa-eye mr-2" aria-hidden="true"></i>
                   9,801 Lượt xem
               </div>
               <div className='like-movie-dd'>
                  <i class="fa fa-share-alt mr-2" aria-hidden="true"></i>
                   287 Share
               </div>
               
               </div>
            </div>
            <br />
            <h5 className='text-left ml-5 mt-3 text-warning'>Description:</h5>
            
            <p className='text-justify mx-5 my-2' style={{color: "#adacac"}}>  {movie.description}</p>
            <div className="px-5 row" style={{ width: "100%", height: "40px", borderRadius: "10px", color: "#e6e5e3" }}>
               <div className='col-3'>
                  <div className='item-movie-ddd'>
                     <i class="fa fa-star-half-o text-warning my-2" style={{ fontSize: "30px" }} aria-hidden="true"></i>
                     <p style={{ fontSize: "16px" }}>Điểm 9/10</p>
                  </div>
               </div>
               <div className='col-3'>
                  <div className='item-movie-ddd'>
                     <i class="fa fa-download text-warning my-2" style={{ fontSize: "30px" }} aria-hidden="true"></i>
                     <p style={{ fontSize: "16px" }}>Tải về</p>
                  </div>
               </div>
               <div className='col-3'>
                  <div className='item-movie-ddd'>
                     <i class="fa fa-bell text-warning my-2" style={{ fontSize: "30px" }} aria-hidden="true"></i>
                     <p style={{ fontSize: "16px" }}>Thông báo</p>
                  </div>
               </div>
               <div className='col-3'>
                  <div className='item-movie-ddd'>
                     <i class="fa fa-share-square-o text-warning my-2" style={{ fontSize: "30px" }} aria-hidden="true"></i>
                     <p style={{ fontSize: "16px" }}>Share...</p>
                  </div>
               </div>


            </div>
            <br></br>
            <br></br>
            <hr style={{ background: "#e6e5e3", height: "1px", width:"50%"}} />

            <h5 className="mt-5 ml-4 text-warning text-left">Đề Xuất Cho bạn</h5>
            
            <Recommendation movies={moviesDX}/>
            {
               user.user?
               <InputComment movie={movie} handleComment={handleComment}/>:
               <Link to="/login"><button type="button" className="btn btn-outline-warning ">Login để có thể Comment</button></Link>
            }
            
            
            <ShowComment comments={comments} />


         </div>

         

         <Footer />
      </div>
   );
}

export default DetailMoviePage;