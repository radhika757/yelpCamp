const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.listen(3000, () => {
    console.log('Server running on 3000');
});

app.get('/', (req,res)=>{
    res.send('Home Page');
});

app.get('/dogs', (req,res)=>{
    res.send('A list of dogs');
});
