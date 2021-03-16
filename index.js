const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
// const {pool} = require('./config')
//
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cors())
//
// const getVerbs = (request, response) => {
//   pool.query('SELECT * FROM germanverbs', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results)
//   })
// }
//
// const addVerb = (request, response) => {
//   const {engverb, gerverb} = request.body
//   pool.query(
//     'INSERT INTO germanverbs (engverb, gerverb) VALUES ($1, $2)',
//     [engverb, gerverb],
//     (error) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).json({status: 'success', message: 'Verb added.'})
//     },
//   )
// }
//
// app.route('/verbs').get(getVerbs)
// app.get('/', function (req, res) { res.send('Hello'); });
//
// app.get('/test', function(req, res) {
//   pool.query("SELECT * FROM germanverbs", function(error, result){
//     const sth = res.json(result);
//     console.log(sth)
//   });
// });
//
// // Start server
// app.listen(process.env.PORT || 3002, () => {
//   console.log(`Server listening`)
// })

const { Pool } = require('pg');

const env = process.env.NODE_ENV
console.log("ENV>>>>>>>>>>>>", env)
if (env === 'production') {
    console.log("STATUS>>>>>>>>>>>>>", "production")
    connectionString = {
    connectionString: process.env.DATABASE_URL,
    ssl: true
    };
};

const pool = new Pool(connectionString);
console.log("pool>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", pool)
pool.on('connect', () => console.log('connected to db'));
const data = pool.query('SELECT * FROM germanverbs', (error, results) => {
    if (error) {
       throw error
     }
     response.status(200).json(results)
    })
console.log("data>>>>>>>>>>>>>>>>>>>>>>>", data)
app.get('/', function (req, res) { res.send(data); });
