var PORT = 2000;
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');

/** This middleware helps to get vales from POST method */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


io.on('connection', function () {
    console.log(PORT + " Connected with IO...");
});

server.listen(PORT, function () {
    console.log(PORT + " listening...");
});


/** A simple GET */

app.get('/simple', function (req, res) {
    console.log(req.query);// empty
    res.send('<h1>welcome to New Game </h1>');
});

/** GET with parameters */
app.get('/params', function (req, res) {
    console.log(req.query);
    res.send('success with params ' + JSON.stringify(req.query));
});
/** POST request */
app.post('/post', function (req, res) {
    console.log(req.body);
    res.send('Post Success with value ' + JSON.stringify(req.body));
});

