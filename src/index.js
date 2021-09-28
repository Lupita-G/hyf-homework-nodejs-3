const express = require ('express');

const app = express();

let users = [];
let removed = users.splice(0, 1);
let index = users.indexOf({id: Number(req.params.id)});

app.get('/', function (req, res){
    res.send('Hello World!'); 

});


app.get('/users', (req, res)=>{
    res.send(users.map((item) => (
        {id: item}
    )));
});


app.post('/user', function(req, res){
    users.push(users.length);

    res.status(200).json({id: users[users.length - 1]})
});

app.get('/user/:id', function(req, res){
    res.send({ id: Number(req.params.id)});
});
 
app.delete('/user/:id', function(req, res){
    users.indexOf({id: Number(req.params.id)});

    if(index < 0){
        res.status(204)
    } else {
        res.status(200)
        
    }
});

app.listen(3000, function(){
    console.log('listening on port 3000');
})
