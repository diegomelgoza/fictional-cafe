const express = require('express');
const router = express.Router();

router.get('/', (req, res ,next) => {
    res.render('index');
})

router.get('/menu', (req, res ,next) => {
    res.render('menu');
})

router.get('/about', (req, res, next) => {
    res.render('about');
})

module.exports = router;