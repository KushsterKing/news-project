const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    id: String,
    name: String,
    description: String,
    url: String,
    category: String,
    language: String,
    country: String,
    urlsToLogos: {
        small: String,
        medium: String,
        large: String
    }
});

module.exports = mongoose.model('News', newsSchema);