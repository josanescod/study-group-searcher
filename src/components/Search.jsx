import { useState } from 'react';

const Search = (props) => {
    //const [text, setText] = useState('');
    const { search, onSearch } = props;//object destructuring props para no tener que poner props.search, props.onSearch     

    return (
        <div id="Search">
            {/*<p>{text}</p>*/}
            {/*<label htmlFor="search">Search: </label>*/}
            <input className="mt-5 pl-5" id="search" type="text" onChange={onSearch} value={search} />
        </div>);
};


export default Search;