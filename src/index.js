const express = require ('express');

const app = express();

app.get('/users', (req, res) => {
    res.send('');
    
})
app.listen(3000, function(){
    console.log('listening on port 3000');
})


