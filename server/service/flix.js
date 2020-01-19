const flix = require('../data/flix');

flix.methods(['get','post','put','delete']);

flix.updateOptions({new: true, runValidators: true});

module.exports = flix;