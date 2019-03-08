/**
 * A component for rendering list items of the search.
 */

const SearchResultItem = (props) => (
    <li>
        <img src={props.thumb}>
        <div>
            <p>{props.title}</p>
            <p>{props.author}</p>
            <p>{props.ratings}</p>
        </div>
    </li>
)

export default SearchResultItem