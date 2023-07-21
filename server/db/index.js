const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const mongoUri = 'mongodb://127.0.0.1/pokemon';
const poki=require("../pokemon/Pokemon")
let db=mongoose.connect(mongoUri,(err)=>{
    if (err) console.log(err)
    else console.log("db conneted")
})


module.exports = db;
