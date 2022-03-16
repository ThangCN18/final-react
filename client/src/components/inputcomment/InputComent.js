import { useState} from "react"
import { useSelector } from "react-redux"

import "./inputcomment.css"
function InputComment(props) {
    
    const [value, setValue] = useState("")
    const user = useSelector(state => state.user.data)
    

    const handleSubmitComment = async (e) =>{
        e.preventDefault()
        if(value.trim().length<2){
            return null
        }else{
            const url = `http://127.0.0.1:8000/comment/${props.movie._id}`
            const newComment = {
                username: user.user.username,
                content: value
            }
            await fetch(url,{
                headers: {
                    'Content-Type': 'application/json',
                    "token": `Bearer ${user.token}`},
                type: "cors",
                method: "POST",
                body: JSON.stringify(newComment) 
            })
            setValue("")
            const urlf = `http://localhost:8000/comment/${props.movie._id}`
            const commentsBody = await fetch(urlf)
            const comments = await commentsBody.json()
            const commentsReverse = comments.reverse()
   
            
            props.handleComment(commentsReverse)
        }
    }

    return ( 
        <form className="text-left mx-4 mb-2 mt-4" onSubmit={handleSubmitComment} >
            <input 
            className="text-comment float-left" 
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            type="text" 
            placeholder="Content..."/>  
            <button type="submit" class="btn btn-secondary btn-lg ">Comment</button>  
        </form>
     );
}

export default InputComment;