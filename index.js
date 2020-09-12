const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

//node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/socket');

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('conectado en el local host ', process.env.PORT);
});