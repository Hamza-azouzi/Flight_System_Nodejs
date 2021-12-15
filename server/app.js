const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { response } = require('express');
const { request } = require('express');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dbServer = require('./dbServer');
const DbService = require("./dbServer");
 
//create

app.post("/insert", (request, response) => {

  const { name } = request.body;
  const db = DbService.getDbServiceInstance();

  const result =db.insertNewName(name);
  result
  .then(data => response.json({succes:true}))
  .catch(err => console.log(err));

});

//read

app.get("/getAll", (request, response) => {

  const db = DbService.getDbServiceInstance();

const result =db.getAllData();  

result
.then(data => response.json({ data:data }))
.catch(err => console.log(err));

});

//update

//delete

app.listen(process.env.PORT , () => console.log('app is runnig'));