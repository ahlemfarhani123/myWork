const express = require('express');
const morgan = require('morgan');
const db = require('./db');
const route=require("./pokemon/pokemonController")
// const routes=require("./pokemon/pokemonRouter")
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

// app.use((req,res,next)=>{
//   rateL(req,res,next)
// })

// TODO: Import the pokemonRouter and assign it to the correct route:


app.get("/getAll",(req,res)=>{
  try {
    
    route.retrieve(req,res)
  } catch (error) {
    console.log(error)
  }
})
app.post("/addOne",(req,res)=>{
  try {
    
    route.createOne(req,res)
  } catch (error) {
   console.log(error) 
  }
})
app.get("/getOne/:name",(req,res)=>{
  try {
    
    route.retrieveOne(req,res)
  } catch (error) {
    console.log(error)
  }
})
app.put("/upadateOne/:name",(req,res)=>{
  try {
    route.updateOne(req,res)
    
  } catch (error) {
    console.log(error)
  }
})
app.delete("/deleteOne/:name",(req,res)=>{
  try {
    route.deleteOne(req,res)
    
  } catch (error) {
    console.log(error)
  }
})
const PORT = 3001;

app.listen(PORT, function () {
  console.log('Poke-MongoDB RESTful API listening on http://localhost:' + PORT);
});
