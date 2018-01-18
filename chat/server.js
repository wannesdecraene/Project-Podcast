'use strict';

const express = require('express');
const app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');


app.use(cors({ credentials: true, origin: 'http://localhost:4200' }));


io.on('connection', (socket) => {

    console.log('user connected');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('add-message', (sender, message, timestamp) => {
        console.log(timestamp)
        io.emit('message', { type: 'new-message', user: sender, text: message, time: timestamp });
        // Function above that stores the message in the database
    });

});

app.listen((process.env.PORT || 1207), () => {
    console.log('server listening on port 1207');
});