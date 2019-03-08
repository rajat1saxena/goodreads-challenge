/**
 * This file contains action creators for all state related functionality.
 */

import {
    QUERY_CHANGED,
    SEARCHING_QUERY,
    SEARCHING_QUERY_SUCCESS,
    LOADING_BOOK_DETAILS,
    LOADING_BOOK_DETAILS_SUCCESS
} from './actionTypes.js'

export function queryChanged(newQuery) {
    return { type: QUERY_CHANGED, newQuery: newQuery }
}

export function searchBooks() {
    
}

export function fetchBookDetailsById(bookId) {
    return { type: FETCH_DETAILS, id: bookId }
}