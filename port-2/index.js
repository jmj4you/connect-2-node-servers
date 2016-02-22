var PORT = 2001;
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var request = require("request");


io.on('connection', function () {

    console.log(PORT + " Connected with IO...");
});
server.listen(PORT, function () {
    console.log(PORT + " listening...");
});


/*** */
app.get('/simple', function (req, res) {
    request("http://localhost:2000/simple", function (error, response, body) {
        res.send(body);
    });
});

/*** */
app.get('/params', function (req, res) {

    request({
        uri: "http://localhost:2000/params?name=JMJ&age=25",
        method: "GET",
        timeout: 10000,
        followRedirect: true,
        maxRedirects: 10
    }, function (error, response, body) {
        console.log(body);
        res.send(body);
    });
});


/** POST */
app.post('/post', function (req, res) {

    request({
        uri: "http://localhost:2000/post",
        method: "POST",
        form: {
            name: "JMJ",
            age: "25"
        }
    }, function (error, response, body) {
        console.log(body);
        res.send(body);
    });
});