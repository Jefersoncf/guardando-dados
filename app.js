const express = require('express');
const path = require('path');
const routes = require("./routes");
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'))

//Templete engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

//bodyParser
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());
// app.use(express.json());

app.use('/', routes);

app.listen(4000, () => {
    console.log('Server on!');
});