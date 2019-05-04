const express = require('express');
const { News } = require('../models');

const router = express.Router();

router.get('/', async (req, res)=>{
    try {

        let where = {};

        if(req.query.name){
            where = {...where, name: {'$regex': req.query.name}}
        }

        if(req.query.description) {
            where = {...where, description: {'$regex': req.query.description}}
        }

        const news = await News.find(where);
        res.send(news)
    } catch (e) {
        console.log(e)
    }

});

router.get('/', async (req, res)=>{
    try {
        const news = await News.find();
        res.send(news)
    } catch (e) {
        console.log(e)
    }
});

router.get('/country/:countryName', async (req, res)=>{
    try {
        const news = await News.find({country: req.params.countryName}); // de us gb
        res.send(news)
    } catch (e) {
        console.log(e)
    }
});

router.get('/categories/:categoryName', async (req, res)=>{
    try {
        const news = await News.find({category: req.params.categoryName}); // general business entertainment
        res.send(news)
    } catch (e) {
        console.log(e)
    }
});

module.exports = router;