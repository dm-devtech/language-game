const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {pool} = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
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

app.get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM germanverbs');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })


app.route('/verbs').get('/verbs', getVerbs).post('addVerb)
app.get('/', function (req, res) { res.send('Hello'); });

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server listening`)
})
