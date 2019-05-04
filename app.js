const express = require('express');
const news = require('./routes/news');
const app = express();
const models = require('./models');

app.use('/api/v1/news', news);

app.listen(3000, () => {
   console.log('connected')
});