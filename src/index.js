const express = require ('express');

const app = express();

let users = [];


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
    let index = users.indexOf(Number(req.params.id)); 

    if(index < 0){
        res.sendStatus(204)
    } else { 
        users.splice(index, 1);
        res.status(202).json({id: Number(req.params.id)});    
    }
});

app.listen(3000, function(){
    console.log('listening on port 3000');
})
