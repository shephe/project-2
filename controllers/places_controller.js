const express = require('express')
const placeController = express.Router()
const Place = require('../models/places')


/****** Routes ******/

//Index
placeController.get('/', (req, res) => {
  res.send('index page')
})

//New
placeController.get('/new', (req, res) => {
  res.send('new page')
})

//Create
placeController.post('/', (req, res) => {
  Place.create(req.body), (error, createdPlace) => {
    res.redirect('/places')
  }
})



module.exports = placeController