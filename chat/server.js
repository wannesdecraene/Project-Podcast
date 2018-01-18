'use strict';

const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const cors = require('cors');
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({ extended: true }))

io.on('connection', (socket) => {

    console.log('user connected')

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('add-message', (sender, message, timestamp) => {
        io.emit('message', { type: 'new-message', user: sender, text: message, time: timestamp });
    });

});
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));

http.listen((process.env.PORT || 80), () => console.log("Listening on port 80"  ));