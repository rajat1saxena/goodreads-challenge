import { fetchDataInJSON } from '../../lib/utils.js'
import {
  CORS_ENABLE_URL,
  GR_SEARCH_URL,
  GR_API_KEY
} from '../../constants.js'

it ('Fetching a sample data from Goodreads', () => {
  // This test actually hits a GoodReads API so internet access is required 
  // for this test case to pass
  return fetchDataInJSON(
    `${CORS_ENABLE_URL}${GR_SEARCH_URL}?key=${GR_API_KEY}&q=${encodeURIComponent('ender')}`
    )
    .then(data => JSON.parse(data))
    .then(data => {
      expect(data).toHaveProperty('GoodreadsResponse')
    }) 
})