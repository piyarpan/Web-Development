//jshint esversion: 6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/personDB", {
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check as there is no name specified!"]
  },

  rating: {
    type: Number,
    min: 1,
    max: 10
  },

  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const peach = new Fruit({
  name: "Peach",
  rating: 9,
  review: "Peaches are yummy"
});
peach.save();

const apple = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Good Fruit"
});
apple.save();


const kiwi = new Fruit({
  name: "Kiwi",
  rating: 7,
  review: "Nice"
});

const banana = new Fruit({
  name: "Banana",
  rating: 9,
  review: "Healthy"
});

const watermelon = new Fruit({
  name: "Watermelon",
  rating: 9.5,
  review: "Juicy"
});

Fruit.insertMany([kiwi, banana, watermelon], function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const arpan = new Person({
  name: "Arpan",
  age: 22
});
arpan.save();

const ram = new Person({
  name: "Ram",
  age: 19,
  favouriteFruit: kiwi
});
ram.save();

Fruit.find(function(err, fruits) {
  if (err) {

    console.log(err);
  } else {
    fruits.forEach(function(fruit) {
      console.log(fruit.name, fruit.rating);
    });
  }
});

Person.updateOne({name:"Arpan"}, {favouriteFruit: apple},function(err){
if(err){
  console.log(err);
}
else{
  console.log("Done");
}
});

// peach.updateOne({
//   _id: "6280a677527f0d72694ae000"
// }, {
//   name: "Peach"
// }, function(err) {
//   if (err) {
//   ;  console.log(err);
//   } else {
//     console.log("Successfully updated");
//   }
// });
