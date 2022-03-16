import "./genre.css"

function Genre(props) {
    const listSelect = ["All", "Hành Động", "Cổ Trang", "Tình Cảm", "Hoạt Hình"]
    return ( 
        <div className="genre text-left" >
            
            <h6 className="mx-2 text-warning">Thể loại:</h6>
            {listSelect.map(value=>{
                if(value === props.selectGenre){
                    return <div className="mx-2 float-left genre-icon-select">{value}</div>
                }else{
                    return <div 
                    onClick={()=>props.handleSelectGenre(value)}
                    className="mx-2 float-left genre-icon">{value}</div>
                }
            })}
        </div>
     );
}

export default Genre;