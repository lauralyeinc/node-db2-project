const express = require('express');

const carsDB = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await carsDB('cars');
        res.json(cars);
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to get cars'});
    }
});

module.exports = router; 