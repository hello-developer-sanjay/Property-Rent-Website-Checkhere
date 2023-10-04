require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const Property = require('./models/propertyModel');
const propertyRoutes = require('./routes/propertyRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/properties', propertyRoutes);
// Add a route handler for "/city/:cityName"
app.get('/api/cities', async (req, res) => {
  try {
    const cities = await Property.distinct('city');
    res.json(cities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Add a route handler for "/city/:cityName"
app.get('/api/city/:cityName', async (req, res) => {
  const { cityName } = req.params;
  try {
    const propertiesInCity = await Property.find({ city: cityName });
    res.json(propertiesInCity);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/api/properties', async (req, res) => {
  let { city } = req.query;
  if (city) {
    // Decode the city parameter
    city = decodeURIComponent(city);
  }
  try {
    let properties;
    if (city) {
      properties = await Property.find({ city });
    } else {
      properties = await Property.find();
    }
    res.json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});









const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
