const express = require ('express');

const app = express();

app.get('/', function (req, res){
    res.send('Hello World'); 

});

app.get('/users', (req, res) =>{
    res.send('[]');
});

app.get('/users', )
app.listen(3000, function(){
    console.log('listening on port 3000');
})


