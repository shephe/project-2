const mongoose = require('mongoose')
const {Schema} = mongoose

const placeSchema = new Schema({
  name: {type: String, required: true},
  address: {type: String},
  quadrant: {type: String, enum: ['Southeast', 'Northeast', 'North', 'Southwest', 'Northwest', 'Elsewhere']},
  type: {type: String},
  keywords: [String],
  website: String,
  description: String,
  admission: Number,
  image: String
})

const Place = mongoose.model('Place', placeSchema)

module.exports = Place