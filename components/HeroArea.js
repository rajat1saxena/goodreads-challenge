/**
 * This component shows the book details in all its glory
 */
import React from 'react'
import { connect } from 'react-redux'

const PresentationalHeroArea = (props) => {
  return (
    <div className="HeroArea">
      {
        props.loading
          ? (<div className="Message">Fetching book details...</div>)
          : (
            props.item
              ? (
                <div>
                  <div className="HeaderSection">
                    <img src={props.item.thumb} />
                    <div className="BookDetails">
                      <p>{props.item.title}</p>
                      <p>{props.item.author}</p>
                      <p>
                      Avg. Rating: {props.item.avg_rating},
                      Total Ratings: {props.item.ratings}
                      </p>
                    </div>
                  </div>
                  <div className="BodySection">
                    <div>
                      <h3>Description</h3>
                      <p>{props.item.description}</p>
                    </div>
                  </div>
                </div>
              )
              : (<div className="Message">Click on a book to see details.</div>)
          )
      }
      <style jsx>{`
        .HeroArea {
          flex: 2;
          display: flex;
          padding: 16px 24px;
        }
        .Message {
          text-align: center;
          flex: 1;
          color: #676767;
          font-size: 1.2em;
        }
        .HeaderSection {
          display: flex;
          flex-direction: row;
        }
        .HeaderSection img {
          height: 100%
        }
        .BookDetails p {
          margin: 5px;
        }
        .BookDetails p:nth-of-type(1) {
          font-size: 2em;
          font-weight: bold;
        }
        .BookDetails p:nth-of-type(2) {
          font-size: 1.4em;
        }
        .BookDetails p:nth-of-type(3) {
          font-size: 1em;
          color: #676767;
          margin-top: 3em;
        }
      `}</style>
    </div>
  )
}

const mapStateToProps = state => ({
  loading: state.loadingBookDetails,
  item: state.bookDetails
})

const HeroArea = connect(
  mapStateToProps
)(PresentationalHeroArea)

export default HeroArea
