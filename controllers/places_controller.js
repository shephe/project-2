const express = require('express')
const placeController = express.Router()
const Place = require('../models/places')
const bootstrap = '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">'


/****** Routes ******/

//Index
placeController.get('/', (req, res) => {
  Place.find({}, (error, allPlaces) => {
    res.render('Index',
      {places: allPlaces})
  })
})

//New
placeController.get('/new', (req, res) => {
  res.render('New',
  // {styles: bootstrap}
  )
})

//Create
placeController.post('/', (req, res) => {
  Place.create(req.body, (error, createdPlace) => {
    res.redirect('/places')
  }) 
})

//Delete
placeController.delete('/:id', (req, res) => {
  console.log(req.params.id)
  Place.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect('/places')
  })
})

//Show
placeController.get('/:id', (req, res) => {
  Place.findById(req.params.id, (error, place) => {
    res.render('Show', {place})
  })
})

//Edit
placeController.get('/edit/:id', (req, res) => {
  Place.findById(req.params.id, (error, place) => {
    res.render('Edit', {place})
  })
})

//Update
placeController.put('/edit/:id', (req, res) => {
  Place.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    res.redirect('/places')
  })
})


module.exports = placeController