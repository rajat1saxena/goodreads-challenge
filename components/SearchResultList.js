/**
 * A component which displays the results of a search
 */
import React from 'react'
import SearchResultItem from './SearchResultItem.js'

const SearchResultList = (props) => {
  // Create a list of all items from the latest search
  const searchItems = []
  if (props.searchResultItems) {
    for (let i of props.searchResultItems) {
      searchItems.push(
        <SearchResultItem
          item={i}
          itemClicked={props.itemClicked}
          key={i.id} />
      )
    }
  }

  return (
    // If searching, show a loading screen. OTherwise, see if the list is empty or not
    // and display appropriate UI.
    <div>
      {
        props.loading
          ? (<div className="Message">Searching...</div>)
          : (
            searchItems.length === 0
              ? (<div className="Message">Nothing to show here.</div>)
              : (
                <ul>
                  {searchItems}
                </ul>
              )
          )
      }
      <style jsx>{`
          ul {
            list-style-type: none;
            padding: 0px;
            margin: 0px;
          }
          .Message {
            text-align: center;
            flex: 1;
            color: #676767;
            font-size: 1.2em;
          }
        `}</style>
    </div>
  )
}

export default SearchResultList
