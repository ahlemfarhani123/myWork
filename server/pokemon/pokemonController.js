const Pokemon = require("./Pokemon");

exports.createOne = async function (req, res) {
  try {
     await Pokemon.create(req.body);
     res.send("added")
  } catch (error) {
    console.log(error);
  }
};

exports.retrieve = async function (req, res) {
  try {
    let result= await Pokemon.find();
    res.json(result)
  } catch (error) {
    console.log(error);
  }
};

exports.retrieveOne = async function (req, res) {
  try {
    let result= await Pokemon.find({name:req.params.name});
    res.json(result)
  } catch (error) {
    console.log(error);
  }
};

exports.updateOne = async function (req, res) {
  try {
     await Pokemon.updateOne({name:req.params.name}, req.body);
     res.send("upadated")
  } catch (error) {
    console.log(error)
  }
};

exports.deleteOne = async function (req, res) {
  try {
     await Pokemon.deleteOne({name:req.params.name});
     res.send("deleted")
  } catch (error) {
    console.log(error)
  }
};
