// for
// while
// do while
// for of
// for in (objects)

// it helps to iterate over the array as well as print the series

// for(variable/initialvalue, condition, operation){}

// i++ -> i+1
//One dimensional array
for (i = 0; i < 5; i++) {
  console.log(i);
}

var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];
for (i = 0; i < city.length; i++) {
  console.log(city[i]);
}

var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];
for (i = 0; i < city.length; i++) {
  console.log(`<p>${city[i]}</p>`);
}

//Two dimensional array

var city = [
  "Delhi",
  "Mumbai",
  ["Red", "Yellow", "Orange"],
  "London",
  "Amsterdam",
];

for (i = 0; i < city.length; i++) {
  if (Array.isArray(city[i])) {
    for (j = 0; j < city[i].length; j++) {
      console.log(city[i][j]);
    }
  } else {
    console.log(city[i]);
  }
}

// while loop

// for (i = 0; i < 5; i++) {
//   console.log(i);
// }

var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//Do while

var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

//for of

var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];

for (mycity of city) {
  console.log(mycity);
}

var city = [
  "Delhi",
  "Mumbai",
  ["Red", "Yellow", "Orange"],
  "London",
  "Amsterdam",
];

for (mycity of city) {
  if (Array.isArray(mycity)) {
    for (mycolor of mycity) {
      console.log(mycolor);
    }
  } else {
    console.log(mycity);
  }
}
