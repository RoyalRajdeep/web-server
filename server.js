var express= require('express');
var app =express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.logger, function(req, res){
    res.send('Hello Express About');
});
app.use(express.static(__dirname + '/public'));
app.listen(PORT, function(){
    console.log('Listening on Port ' + PORT)
});

