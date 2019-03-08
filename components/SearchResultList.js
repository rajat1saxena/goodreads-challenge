/**
 * A component which displays the results of a search
 */

const SearchResultList = (props) => {
    // If searching, show a loading screen. OTherwise, see if the list is empty or not
    // and display appropriate UI.
    <div>
        {
            props.loading ? 
                (<div>Searching...</div>)
                :
                (
                    props.searchResultItems.length === 0 ? 
                        (<div>Nothing found</div>)
                        :
                        (
                            <ul>
                                {props.searchResultItems}
                            </ul>
                        )
                )
        }
    </div>
}

export default SearchResultList