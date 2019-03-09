import React from 'react'
import renderer from 'react-test-renderer'
import SearchBox from '../../components/SearchBox.js'

it('Should render correctly', () => {
  const tree = renderer.create(<SearchBox />).toJSON()
  expect(tree).toMatchSnapshot()
})