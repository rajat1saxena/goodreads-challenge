/**
 * This file provides constant values used across the app.
 */

// export const GR_API_KEY = 'dfvFMgil1TXpW5QaYgAaQ'
// export const GR_SEARCH_URL = 'https://www.goodreads.com/search/index.xml'
// export const GR_BOOK_DETAILS_URL = 'https://www.goodreads.com/book/show.xml'

// // The following helps in dodging CORS and CORB issues
// export const CORS_ENABLE_URL = 'https://cors-anywhere.herokuapp.com/'

module.exports = {
  GR_API_KEY: 'dfvFMgil1TXpW5QaYgAaQ',
  GR_SEARCH_URL: 'https://www.goodreads.com/search/index.xml',
  GR_BOOK_DETAILS_URL: 'https://www.goodreads.com/book/show.xml',
  
  // URLs for fetching data from app's own backend
  API_SEARCH_URL: '/api/search',
  API_DETAILS_URL: '/api/details',
}
