const express = require('express');

const carRouter = require('./cars/carsRouter');

const server = express();

server.use(express.json());

server.use("/api/car-dealer", carRouter);

server.get('/', (req, res) => {
    res.send('<h1> 👩‍💻 DB Node Project 2 </h1>');
});

module.exports = server; 