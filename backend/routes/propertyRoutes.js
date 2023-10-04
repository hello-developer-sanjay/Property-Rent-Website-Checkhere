const express = require('express');
const router = express.Router();
const Property = require('../models/propertyModel');

router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



router.get('/:id', async (req, res) => {
    try {
      const property = await Property.findById(req.params.id);
      if (!property) {
        return res.status(404).json({ message: 'Property not found' });
      }
      res.json(property);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });
  // Get properties by city
  router.get('/city/:cityName', async (req, res) => {
    try {
      const properties = await Property.find({ city: req.params.cityName });
      res.json(properties);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  // Add a route handler for searching properties by city



  
module.exports = router;
