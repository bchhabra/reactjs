import React from 'react';

const SearchName = (props) => {

    return(
        <div>
            <input type="text" onChange={props.onSearch} value={props.searchedText}/>
        </div>
    );
}

export default SearchName;