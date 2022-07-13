var express = require('express');
var cors = require('cors');
var request = require('request');

var app = express();

app.use(cors());



app.get('/api', function(req, res) {
    request('https://www.freetogame.com/api/games',(error, response, body)=>{
        res.json(body)
    });
});

app.get('/online', function(req, res) {
    request('https://www.gamerpower.com/api/giveaways',(error, response, body)=>{
        res.json(body)
    });
});

app.listen(4000,()=>{
    console.log("Server started on port 4000");
})
