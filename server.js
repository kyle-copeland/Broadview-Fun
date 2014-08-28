var express = require('express');
var app = express();

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/index.html');
});	

app.listen(process.env.PORT || 3000);

console.log("Node server now listening on PORT 3000");