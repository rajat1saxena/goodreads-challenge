/**
 * A search box component for accepting user query.
 */

import React from 'react'

const SearchBox = ({query, handleQueryChange, makeASearch}) => (
    <div>
        <input 
            type="text" 
            placeholder="Search something" 
            value={query}
            onChange={ (e) => handleQueryChange(e.target.value) } />
        <button type='submit' onClick={makeASearch}>Search</button>
    </div>
)

export default SearchBox