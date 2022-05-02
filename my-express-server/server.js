//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req,res){
  res.send("Hello");
});

app.get("/about", function(req,res){
  res.send("I am Arpan. I am a web developer");
})

app.get("/hobbies", function(req,res){
  res.send("I love football");
})

app.get("/ethics", function(req,res){
  res.send("I love football");
})

app.listen(3000, function(){
  console.log("Server Started at 3000");
});
