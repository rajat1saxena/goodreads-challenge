/**
 * An Express router to interact with GoodReads' API and serve
 * the React frontend.
 */

const express = require('express')
const request = require('request')
const querystring = require('querystring')
const router = express.Router()
const constants = require('./constants.js')

router.get('/search/:text', (req, res) => {
  // construct a query string to be sent to GoodReads.
  const qString = querystring.stringify({
    key: constants.GR_API_KEY,
    q: req.params.text
  })
  const goodreadsUrl = `${constants.GR_SEARCH_URL}?${qString}`
  request(goodreadsUrl, (err, response, body) => {
    if (err) {
      res
        .status(500)
        .send(JSON.stringify({
          error: err.message
        }))
    }

    if (response.statusCode === 200) {
      res
        .status(200)
        .send(JSON.stringify({
          data: body
        }))
    } else {
      res
        .status(Number(response.statusCode))
        .send(JSON.stringify({
          error: 'Error encountered'
        }))
    }
  })
})

router.get('/details/:id', (req, res) => {
  // construct a query string to be sent to GoodReads.
  const qString = querystring.stringify({
    key: constants.GR_API_KEY,
    id: req.params.id
  })
  const goodreadsUrl = `${constants.GR_BOOK_DETAILS_URL}?${qString}`
  request(goodreadsUrl, (err, response, body) => {
    if (err) {
      res
        .status(500)
        .send(JSON.stringify({
          error: err.message
        }))
    }

    if (response.statusCode === 200) {
      res
        .status(200)
        .send(JSON.stringify({
          data: body
        }))
    } else {
      console.log(body)
      res
        .status(Number(response.statusCode))
        .send(JSON.stringify({
          error: 'Error encountered'
        }))
    }
  })
})

module.exports = router
