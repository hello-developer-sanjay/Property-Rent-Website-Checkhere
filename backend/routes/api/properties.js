const express = require('express');
const router = express.Router();
const propertyController = require('../../controllers/propertyController');

router.get('/', propertyController.getAllProperties);

module.exports = router;
