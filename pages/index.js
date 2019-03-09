/**
 * This is the landing page for the app.
 */
import React from 'react'
import { Provider } from 'react-redux'
import GoodReadsContainer from '../components/GoodReadsContainer.js'
import store from '../redux/store.js'

const Index = () => (
  <Provider store={store}>
    <div>
      <GoodReadsContainer />
    </div>
  </Provider>
)

export default Index
