/**
 * The reducer for changing the app state
 */

import {
    QUERY_CHANGED,
    INITIATE_SEARCH,
    SEARCH_SUCCESS,
    SEARCH_FAILED,
    LOAD_BOOK_FAILED,
    LOAD_BOOK_DETAILS,
    LOAD_BOOK_DETAILS_SUCCESS
} from './actionTypes.js'
import BookItem from '../lib/BookItem.js';

// This represents the initial state our app will be in 
// when it is loaded for the very first time.
const initialState = {
    query: '',
    loadingSearch: false,
    loadingBookDetails: false,
    lastSearchResults: [],
    bookDetails: null
}

// The reducer function
export default function (state = initialState, action) {
    // console.log(action)
    switch(action.type) {
        case QUERY_CHANGED:
            return Object.assign({}, state, {query: action.newQuery})
            break
        case INITIATE_SEARCH:
            return Object.assign({}, state, {loadingSearch: true})
            break
        case SEARCH_SUCCESS:
            const resultItems = []
            const result = JSON.parse(action.data)
            for (let i of result.GoodreadsResponse.search.results.work) {
              resultItems.push(
                new BookItem(
                  i.best_book.id._text,
                  i.best_book.title._text,
                  i.best_book.author.name._text,
                  i.ratings_count._text,
                  i.average_rating._text,
                  i.best_book.small_image_url._text
                )
              )
            }

            return Object.assign({}, state, {
              loadingSearch: false,
              lastSearchResults: resultItems
            })
            break
        case SEARCH_FAILED:
            return Object.assign({}, state, {loadingSearch: false})
            break
        case LOAD_BOOK_DETAILS:
            return Object.assign({}, state, {loadingBookDetails: true})
            break
        case LOAD_BOOK_FAILED:
            return Object.assign({}, state, {loadingBookDetails: false})
            break
        case LOAD_BOOK_DETAILS_SUCCESS:
            const jsonData = JSON.parse(action.data)
            const book = jsonData.GoodreadsResponse.book
            const id = book.id._text || ''
            const title = book.title._text || book.title._cdata || ''
            const author = (book.authors.author.length > 1 ? 
              book.authors.author[0].name._text 
              : 
              book.authors.author.name._text) || ''
            const ratings_count = book.ratings_count._text || book.ratings_count._cdata || ''
            const average_rating = book.average_rating._text || book.average_rating._cdata || ''
            const image = book.image_url._text || book.image_url._cdata || ''
            const description = book.description._text || book.description._cdata || ''
            const bookItem = new BookItem(
              id,
              title,
              author,
              ratings_count,
              average_rating,
              image,
              description
            )
            
            return Object.assign({}, state, {
              loadingBookDetails: false,
              bookDetails: bookItem
            })
            break
        default:
            return state
    }
}

