var express = require('express');
var bodyparser = require('body-parser');
var expressjwt = require('express-jwt');
var cors = require('cors');

var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static('public'));

app.use(cors());
/*app.use(expressjwt({secret:'secreto'})
   .unless({path:[
      '/auth/login'
   ]}));*/

var connection = require('./connection');
var routes = require('./routes');

connection.inicia();
routes.configurar(app);

var server = app.listen(8000, function() {
   console.log('Escuchando en el puerto ', server.address().port);
})