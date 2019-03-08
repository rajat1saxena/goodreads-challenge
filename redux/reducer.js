/**
 * The reducer for changing the app state
 */

import {
    QUERY_CHANGED,
    SEARCHING_QUERY,
    SEARCHING_QUERY_SUCCESS,
    LOADING_BOOK_DETAILS,
    LOADING_BOOK_DETAILS_SUCCESS
} from './actionTypes.js'

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
    console.log(action)
    switch(action.type) {
        case QUERY_CHANGED:
            return Object.assign({}, state, {query: action.newQuery})
            break;
        case SEARCHING_QUERY_SUCCESS:
            break;
        case LOADING_BOOK_DETAILS:
            break;
        case LOADING_BOOK_DETAILS_SUCCESS:
            break;
        default:
            return state
    }
}

