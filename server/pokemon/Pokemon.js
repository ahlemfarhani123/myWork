
const mongoose = require('mongoose');
const db = require('../db/index.js');
let pokemonSchema= new mongoose.Schema({
    imageUrl:{
        type:String,

    },
    name:{
       type: String,
       unique: true

    },
    number:{
        type:Number,
        unique: true
    },
    types:Array,
})
let Pokemon=mongoose.model("poki",pokemonSchema)
 

module.exports = Pokemon;
