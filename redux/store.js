/**
 * A redux store for the app
 */
import { createStore } from 'redux'
import reducer from './reducer.js'

const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store