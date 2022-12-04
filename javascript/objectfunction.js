let calc = {
  sum: function (a, b) {
    return a + b;
  },
  sub: (a, b) => {
    return a - b;
  },
};

console.log(calc.sum(2, 4));
console.log(calc.sub(4, 2));

function language(name, country) {
  this.name = name;
  this.country = country;
  this.greet = () => {
    return `Say Hi to ${name}`;
  };
}

var Hindi = new language("Hindi", "India");
// language { name: 'Hindi', country: 'India', greet: f}
console.log(Hindi.greet());

let English = new language("english", "england");
//language { name: 'english', country: 'england', greet: f}
console.log(English.greet());
