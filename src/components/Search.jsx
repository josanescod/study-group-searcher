
const Search = (props) => {    
    const { search, onSearch } = props;//object destructuring props para no tener que poner props.search, props.onSearch     

    return (
              <div className="has-text-centered">        
                <input className="mt-1" id="search" type="text" placeholder="Asignatura" autoComplete="off" onChange={onSearch} value={search} />
              </div>            
    )       
};


export default Search;