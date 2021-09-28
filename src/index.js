const express = require ('express');

const app = express();

app.get('/', function (req, res){
    res.send('Hello World!'); 

});

app.get('/users', function (req, res){
    res.send([]);
});

app.post('/user', function(req, res) {
    res.send([{id:0}]);
});

app.get('/user/:id', function(req, res){
    res.send([{id:0}]);
});

app.listen(3000, function(){
    console.log('listening on port 3000');
})


