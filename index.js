const express = require('express')
const cors = require('cors')
const {pool} = require('./config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const getVerbs = (request, response) => {
  pool.query('SELECT * FROM germanverbs', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addVerb = (request, response) => {
  const {engverb, gerverb} = request.body
  pool.query(
    'INSERT INTO germanverbs (engverb, gerverb) VALUES ($1, $2)',
    [engverb, gerverb],
    (error) => {
      if (error) {
        throw error
      }
      response.status(201).json({status: 'success', message: 'Verb added.'})
    },
  )
}

app.get('/', function (req, res) { res.send('Hello'); });
app.get("/verbs", getVerbs)

// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})
