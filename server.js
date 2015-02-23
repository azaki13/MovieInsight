var express = require('express');
var app = express();

app.get('/', function (req, res) {
	//res.send('hello');
	res.sendFile(process.cwd() + '/mainPage.html')
});


app.listen(9002);