/**
 * A component for rendering list items of the search.
 */
import React from 'react'

const SearchResultItem = (props) => (
  <li onClick={ () => props.itemClicked(props.item.id) }>
    <img src={props.item.thumb} />
    <div>
      <p>{props.item.title}</p>
      <p>{props.item.author}</p>
      <p>
              Avg. Rating: {props.item.avg_rating}
      </p>
    </div>
    <style jsx>{`
          li {
            border: 1px solid #eee;
            display: flex;
            flex-direction: row
          }
          li + li {
            margin-top: 0.3em;
          }
          img {
            height: 100%
          }
          p {
            margin: 5px;
          }
          p:nth-of-type(1) {
            font-size: 1em;
            font-weight: bold;
          }
          p:nth-of-type(2) {
            font-size: 0.9em;
          }
          p:nth-of-type(3) {
            font-size: 0.8em;
            color: #676767;
            margin-top: 1em;
          }
        `}</style>
  </li>
)

export default SearchResultItem
