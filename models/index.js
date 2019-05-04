const mongoose = require('mongoose');

const News = require('./news');

const {mongoURL} = require('../constants');

mongoose.connect(mongoURL, {useNewUrlParser: true});

module.exports = { News };