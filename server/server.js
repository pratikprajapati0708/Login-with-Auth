//const express = require('express');
//const cors = require('cors');
//const morgon = require('morgan');
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import ConnectToDB from '../server/database/connection.js'
import route from '../server/router/route.js';
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); //less hackers know about my stack


const port = 8080;
//HTTP Get Request
app.get('/', (req, res) => {
  res.status(201).json("Home Get Request");
})

//api routes
app.use('/api',route)

//start server only we have valid connection
ConnectToDB().then(() => {
  try {
    app.listen(port, () => {
      console.log(`Server connect to ${port}`);
    })
  } catch (error) {
    console.log('Cannot connect to the server');
  }
}).catch(error=>{
  console.log('Invalid database connection');
})

