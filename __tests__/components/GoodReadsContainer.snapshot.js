import React from 'react'
import renderer from 'react-test-renderer'
import GoodReadsContainer from '../../components/GoodReadsContainer.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { 
  initialState 
} from '../../redux/reducer.js'

it('Should render correctly', () => {
  const store = createStore((state = initialState) => state)
  const tree = renderer.create(
      <Provider store={store}>
        <GoodReadsContainer />
      </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})