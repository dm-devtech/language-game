const express = require('express')
const cors = require('cors')
const config = require('./config')
require('dotenv').config()
const { Pool } = require('pg');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cors())

const isProduction = process.env.NODE_ENV === 'production'
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
})

app.get('/', function (req, res) { res.send('Language Lighthouse'); });

app.get('/german', (request, response, next) => {
 pool.query('SELECT * from german', (err, res) => {
  if (err) return next(err);
  response.json(res.rows);
 });
});

app.get('/french', (request, response, next) => {
 pool.query('SELECT * from french', (err, res) => {
  if (err) return next(err);
  response.json(res.rows);
 });
});

app.get('/latin', (request, response, next) => {
 pool.query('SELECT * from latin', (err, res) => {
  if (err) return next(err);
  response.json(res.rows);
 });
});

app.listen(process.env.PORT || 3002, () => {
  console.log("server listening>>>>>>>>>>", `Server listening`)
})
