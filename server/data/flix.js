const restful = require('node-restful');
const mongoose = require('mongoose');

const flix = new mongoose.Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
});

module.exports = restful.model('flix', flix);