var express = require('express')
var app = express()
var path = require('path')

app.use(express.static('src'))
app.use('/prod', express.static('dist'))

app.get('/dev', function(req, res) {
	res.sendFile(path.join(__dirname + '/index-dev.html'))
})

app.get('/prod', function(req, res) {
	res.sendFile(path.join(__dirname + '/index-prod.html'))
})


app.listen(8080)