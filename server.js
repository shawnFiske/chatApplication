var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + "/build"));

var port = process.env.PORT || 3000;

io.on('connection', function(socket) {
  console.log('new connection');

  socket.on('add-customer', function(customer) {
    io.emit('notification', {
      message: 'new customer',
      customer: customer
    });
  });
});

var server = app.listen(port, function() {
  console.log('Listening on port:', port);
}).listen(port);
