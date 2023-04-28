const express = require('express');
const router = express.Router();
const Register = require('../models/registerModel')


router.get('/register', (req, res) => {
    res.render('register', { message: 'Contact form' })
})

router.post('/register', async (req, res) => {
    try {
        const register = new Register(req.body);
        await register.save();
        res.redirect('/register')

    } catch (error) {
        console.log(error);
        res.status(500).send('Error while saving data');
    }
})

module.exports = router;