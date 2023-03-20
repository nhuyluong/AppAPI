// const express = require('express');
// const app = express();

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log('Server running on port ${PORT}'));

import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require('dotenv').config();


let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 3000;
//Port == undefined => port = 3000

app.listen(port, () => {
  console.log("Backend Nodejs is runing on the port: "+port)
});


