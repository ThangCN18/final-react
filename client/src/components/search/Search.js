import "./search.css"

function Search(props) {
    return ( 
        <div className="search text-right">
        <input 
        className="text-search" 
        type="text" 
        value={props.testSearch} 
        onChange={e => props.onChangeTextSearch(e.target.value)}
        placeholder="Search..."/>      
        
        </div>
        
        
     );
}

export default Search;