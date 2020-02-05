const express = require('express');

const carsDB = require('../data/dbConfig.js');

const router = express.Router();


//√√ 
router.get('/', async (req, res) => {
    try {
        const cars = await carsDB('cars');
        res.json(cars);
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to get cars'});
    }
});

// √√ 
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const [car] = await carsDB('cars').where('id', id);
        res.json(car);
    } catch(err) {
        console.log(err);
        res.sendStatus(500).json({message: 'Failed to get car'})
    }
});

//
router.post('/', async (req, res) => {
    const carData = req.body;
    try {
        const car = await carsDB('cars').insert(carData);
        res.status(201).json(car);
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500).json({ message: 'Unable to post new car'});
    }
});

module.exports = router; 