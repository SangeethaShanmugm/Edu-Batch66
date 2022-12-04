var a = {}; //object
var b = []; // array

var movieName = "Avengers";
var movieRating = 4.5;
var movieType = "Action";

var movieName1 = "Jab We Met";
var movieRating1 = 4.7;
var movieType1 = "Romantic";
//object => { key: "value"}
var movie = {
  name: "Avengers",
  rating: 4.5,
  type: "Action",
};

console.log(typeof movie); //object
console.log(movie.name);
console.log(movie.rating);
console.log(movie.type);
console.log(movie);

//Array of objects
//JSON - Javascript Object Notation{"key": "value" }

var movie = {
  name: "Avengers",
  rating: 4.5,
  type: "Action",
};

for (key in movie) {
  console.log(movie[key]);
}
