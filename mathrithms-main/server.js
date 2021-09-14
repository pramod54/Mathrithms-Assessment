const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
const userRoutes=require('./routes/users');
app.use('/user',userRoutes);

app.listen(5001,console.log('server running on PORT',5001));