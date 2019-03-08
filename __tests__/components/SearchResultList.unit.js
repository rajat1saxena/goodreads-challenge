import React from 'react'
import {render, fireEvent, cleanup} from 'react-testing-library'
import SearchResultList from '../../components/SearchResultList.js'

// unmounts and cleans up DOM after testing
afterEach(cleanup)

it('When search is underway', () => {
    const component = render(
        <SearchResultList />
    )
    console.log(component)
})