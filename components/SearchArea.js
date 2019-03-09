/**
 * This component houses the search bar and the search results list.
 */
import React from 'react'
import { connect } from 'react-redux'
import SearchBox from './SearchBox.js'
import SearchResultList from './SearchResultList.js'
import {
  queryChanged,
  searchBooks,
  bookSelected
} from '../redux/actions.js'

/**
 * The presentational component for the search area
 */
const PresentationalSearchArea = (props) => (
  <div className="SearchArea">
    <SearchBox
      query={props.query}
      handleQueryChange={props.handleQueryChange}
      handleSearch={props.handleSearch} />
    <SearchResultList
      loading={props.loading}
      searchResultItems={props.results}
      itemClicked={props.handleItemClicked} />
    <style jsx>{`
          .SearchArea {
            display: flex;
            flex-direction: column;
            flex: 1;
          }
        `}</style>
  </div>
)

const mapStateToProps = state => ({
  query: state.query,
  loading: state.loadingSearch,
  results: state.lastSearchResults
})

const mapDispatchToProps = dispatch => ({
  handleQueryChange: newQuery => {
    dispatch(queryChanged(newQuery))
  },
  handleSearch: () => {
    dispatch(searchBooks())
  },
  handleItemClicked: (id) => {
    dispatch(bookSelected(id))
  }
})

const SearchArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationalSearchArea)

export default SearchArea
