/**
 * This component houses the search bar and the search results list.
 */
import { connect } from 'react-redux'
import SearchBox from './SearchBox.js'
import {
    queryChanged,
    searchBooks
} from '../redux/actions.js'

/**
 * The presentational component for the search area
 */
const PresentationalSearchArea = (props) => (
    <div>
        <SearchBox 
            query={props.query} 
            handleQueryChange={props.handleQueryChange} 
            handleSearch={props.makeASearch} />
        <SearchResultList 
            searchResultItems={props.searchResultItems} />
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
    }
})

const SearchArea = connect(
    mapStateToProps,
    mapDispatchToProps
)(PresentationalSearchArea)

export default SearchArea