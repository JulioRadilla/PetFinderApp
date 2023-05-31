const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mainRoutes = require('./routes/main');
const petRoutes = require('./routes/pets');
const connectDB = require('./config/database');

require('dotenv').config({path: './config/.env'});

//Connection to database
connectDB();

//Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use('/', mainRoutes)
app.use('/pets', petRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running in port ${process.env.PORT}`)
})    