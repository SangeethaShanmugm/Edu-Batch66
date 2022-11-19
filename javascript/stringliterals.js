var mname = "The Godfather";
var type="thriller"
var ind = "Hollywood"
var rating = 4.5

// The Godfather is an thriller movie with the rating as 4.5 and from ind hollywood.
//es5
var out = ""+mname+" is an "+type+" movie with the rating as "+rating+" and from ind "+ind+"."
console.log(out);

//es6 

var out = `${mname} is an ${type} movie with the rating as ${rating} and from ind ${ind}. `
console.log(out);