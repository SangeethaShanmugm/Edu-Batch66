// Map - Map is used to iterate the Array
// It always return the same length of output array as input array
// It is used to apply the logic(add, sub, mul, div)

var a = [2, 5, 3, 7, 8, 2, 7, 9, 3, 5, 6, 7, 12, 24, 28];
a.map((data) => {
  return data * 2;
});
//[2, 5, 3, 7, 8, 2, 7, 9, 3, 5, 6, 7, 12, 24, 28];
//[2, 10, 6, 14, 16, 4, 18, 6, 10, 12, 14, 24, 48, 56];

var a = [4, 8, 6, 23, 1];
a.map((abc) => {
  return `<p>${abc}</p>`;
});
//['<p>4</p>','<p>8</p>', '<p>6</p>','<p>23</p>','<p>1</p>']
//<p>4</p>
//<p>8</p>
//<p>6</p>
//<p>23</p>
//<p>1</p>

// Filter - it is used to filter out the value
// It may or may not return the same length of output array as input array
// filter only return those data for which the output condition is true

var a = [2, 5, 3, 7, 8, 2, 7, 9, 3, 5, 6, 7, 12, 24, 28, 60];
a.filter((data1) => {
  return data1 > 20;
});
//[24, 28, 60]

var a = [-1, 0, 1, 2];
a.map((data) => {
  return data * 2;
});
//[-2, 0, 2, 4]

a.filter((data) => {
  return console.log(data);
});
// [-1, ,1, 2];
