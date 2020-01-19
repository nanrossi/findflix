const express = require('express');
const flixService = require('../service/flix');

module.exports = function(server) {
    const router = new express.Router();
    server.use('/api', router);
    
    router.get('/', (req,res) => res.status(200).json({
        error: false,
        data: [],
        message: "It's Working"
    }));
    
    flixService.register(router, '/flix');
}
