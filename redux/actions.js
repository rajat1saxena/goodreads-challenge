/**
 * Action creators for all state related functionality.
 * 
 * Note: These action creators use redux-thunk for async operations.
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
import {
  API_SEARCH_URL,
  API_DETAILS_URL
} from '../constants.js'
import {
  fetchDataInJSON2
} from '../lib/utils.js'

export function queryChanged(newQuery) {
    return { type: QUERY_CHANGED, newQuery: newQuery }
}

export function initiatizingSearch() {
    return { type: INITIATE_SEARCH }
}

export function searchResultSuccess(data) {
    return { type: SEARCH_SUCCESS, data: data }
}

export function searchResultFailed() {
    return { type: SEARCH_FAILED }
}

export function searchBooks() {
    return async (dispatch, getState) => {
      dispatch(initiatizingSearch())

      try {
        const url = `${API_SEARCH_URL}/${getState().query}`
        const response = await fetchDataInJSON2(url)

        dispatch(searchResultSuccess(response))
      } catch (err) {
        dispatch(searchResultFailed())
      }
    }
}

export function initializingBookSearch() {
    return { type: LOAD_BOOK_DETAILS }
}

export function bookSearchSuccess(data) {
  return { type: LOAD_BOOK_DETAILS_SUCCESS, data: data }
}

export function bookSearchFailed() {
    return { type: LOAD_BOOK_FAILED }
}

export function bookSelected(id) {
    return async (dispatch) => {
      dispatch(initializingBookSearch())

      try {
        const url = `${API_DETAILS_URL}/${id}`
        const response = await fetchDataInJSON2(url)

        dispatch(bookSearchSuccess(response))
      } catch (err) {
        dispatch(bookSearchFailed())
      }
    }
}