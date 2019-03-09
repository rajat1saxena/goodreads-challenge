/**
 * A search box component for accepting user query.
 */
import React from 'react'

const SearchBox = ({ query, handleQueryChange, handleSearch }) => (
  <div className="container">
    <input
      type="text"
      placeholder="Search GoodReads.com books"
      value={query}
      onChange={ (e) => handleQueryChange(e.target.value) } />
    <button type='submit' onClick={handleSearch}>Search</button>
    <style jsx>{`
          .container {
            display: flex;
            flex-direction: row
          }
          input {
            border: 2px solid #ddd;
            border-radius: 4px;
            padding: 10px 5px;
            flex-grow: 1
          }
        `}
    </style>
  </div>
)

export default SearchBox
