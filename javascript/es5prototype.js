function human(name, city) {
  this.name = name;
  this.city = city;
}

function robot(name, country) {
  this.name = name;
  this.age = 10;
  this.country = country;
}

var Amisha = new human("Amisha", "Paris");
// human {name: 'Amisha', city: 'Paris'}
console.log(Amisha.city);
undefined;

human.prototype = new robot("Amisha", "France");
// robot {name: 'Amisha', age: 10, country: 'France'}

var Amisha = new human("Amisha", "Paris");
console.log(Amisha);

// human {name: 'Amisha', city: 'Paris'}
console.log(Amisha.country);
