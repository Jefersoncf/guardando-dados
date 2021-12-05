const { application } = require('express');
const express = require('express');
const Message = require('./models/Messager')

const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('index.ejs');
})

routes.post('/index', (req, res) => { //teste
    Message.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }).then(() => {
        res.redirect('/')
    }).catch((err) => {
        res.send('Algo deu errado, verifique ' +err)
    })
})

module.exports = routes;