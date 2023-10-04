const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String, 
    required: true,
  },
  bedrooms: {
    type: Number, 
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // ...other property fields as needed
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
