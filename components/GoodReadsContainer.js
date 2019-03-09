/**
 * This is the master component which houses all GoodReads related
 * functionalities.
 */
import React from 'react'
import SearchArea from './SearchArea'
import HeroArea from './HeroArea'

const GoodReadsContainer = (props) => (
  <div className="GoodReadsContainer">
    <SearchArea />
    <HeroArea />
    <style jsx>{`
      .GoodReadsContainer {
        display: flex;
        flex-direction: row;
        border: 1px solid #eee;
        padding: 5px;
        border-radius: 5px;
      }
    `}</style>
  </div>
)

export default GoodReadsContainer
