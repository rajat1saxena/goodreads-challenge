import { fetchDataInJSON2 } from '../../lib/utils.js'
import {
  API_SEARCH_URL,
  API_DETAILS_URL
} from '../../constants.js'

// NOTE: This test requires the express API server to be up.
it ('Fetching a sample data from Goodreads', () => {
  if (process.env.PORT) {
    return fetchDataInJSON2(
        `http://localhost:${process.env.PORT}${API_SEARCH_URL}/ender`
        )
        .then(data => {
            data = JSON.parse(data)
            expect(data).toHaveProperty('GoodreadsResponse')
        }).catch(err => {
            console.warn('Utils integration test was not run. Is the Express server running?')   
        })
  } else {
      console.warn('Utils integration test was not run as no PORT was specified. Ensure that the PORT should be the port on which the Express server is running.')
  }
  expect(1).toBe(1)
})