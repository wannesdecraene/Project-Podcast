// server.js

'use strict';

const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const cors = require('cors');
const port = 1212;


require('./config/passport')(passport); // pass passport for configuration

app.use(cors({credentials: true, origin: 'http://localhost:4200'}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(cookieParser());

app.use(session({ secret: 'podcastingisfun' }));
app.use(passport.initialize());
app.use(passport.session());


//API

MongoClient.connect(db.url, (err, database) => {
    if (err) {
        return console.log(err);
    }

    require('./app/routes/podcast_routes')(app, database);

    require('./app/routes/passport_routes')(app, passport);

    app.listen((process.env.PORT || port), () => {
        console.log('DB listening on port: ' + port);
    });
})
