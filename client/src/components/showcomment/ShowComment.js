import './showcomment.css'
function ShowComment(props) {
    return ( 
        <div className="text-left p-3 group-comment ">
            <h5 className='text-light'>Danh sách Comment:</h5>
            <div className='hr-comment'></div>
            {props.comments.map((comment)=>{
                return <div key={comment._id} className="item-comment mb-2">
                            <div style={{display: "block"}} >
                                <i class="fa fa-user-circle float-left" aria-hidden="true"></i>
                                <h6 className='ml-1 float-left'>{comment.username}</h6>
                            </div>
                            <br/>
                            
                            <p className='ml-1 ' style={{display: "inline-block"}}>{comment.content}</p>
                        </div>
                        
            })}
        </div>
        
    );
}

export default ShowComment;