/**
 * Main web server for the application.
 */

const express = require('express')
const next = require('next')
const GoodReadsRouter = require('./goodreadsrouter.js')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use('/api', GoodReadsRouter)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    const port = process.env.PORT || 3001

    server.listen(port, err => {
      if (err) throw err
      console.log(`Server ready on http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
