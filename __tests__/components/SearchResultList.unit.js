import React from 'react'
import { render, cleanup } from 'react-testing-library'
import SearchResultList from '../../components/SearchResultList.js'
import BookItem from '../../lib/BookItem.js'

// unmounts and cleans up DOM after testing
afterEach(cleanup)

it('Should show searching when search is underway', () => {
    const { getByText } = render(
        <SearchResultList loading={true}/>
    )
    expect(getByText(/searching/i)).toBeTruthy()
})

it('Should show custom message when list is empty', () => {
  const { getByText } = render(
      <SearchResultList 
        loading={false} 
        searchResultItems={[]}/>
  )
  expect(getByText(/Nothing/i)).toBeTruthy()
})

it('Should show SearchResultItem when list is empty', () => {
  const { getByText } = render(
      <SearchResultList 
        loading={false} 
        searchResultItems={[ new BookItem(0, 'My title', 'Me', 4) ]}/>
  )
  expect(getByText(/My title/i)).toBeTruthy()
  expect(getByText(/Me/i)).toBeTruthy()
})