/**
 * Testing the Redux reducer as a pure function
 */
import reducer from '../../redux/reducer.js'
import {
  QUERY_CHANGED
} from '../../redux/actionTypes.js'

it('checking QUERY_CHANGED action', () => {
  const state = reducer({}, { type: QUERY_CHANGED, newQuery: 'fake' })
  expect(state).toHaveProperty('query')
  expect(state.query).toBe('fake')
})