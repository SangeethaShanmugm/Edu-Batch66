var uname = "sangeetha"
uname.toUpperCase()
"SANGEETHA"
uname.toLowerCase()
"sangeetha"


var city = "mumbai"

city.length
6
uname.length
9

var city = "mumbai"
// m   u   m   b   a   i
// 0   1   2   3    4   5 
city[0] 
'm'
city[3]
'b'
city[5]
'i'

city.charAt(0)
'm'
city.charAt(5)
'i'

city.at(0)
'm'
city.at(1)
'u'
//  m    u      m    b      a      i
// -6   -5     -4   -3     -2   -1 
console.log(city.at(-1))
'i'
city.at(-2)
'a'

city.charAt(-1)
''

var a  = "John" // john // JOHN
var b = "john" // john    /JOHN

a == b
false
a.toLowerCase()  == b.toLowerCase()
true

var city = "mumbai"
// m   u   m   b   a   i
// 0   1   2   3    4   5 
//slice(starting_position, ending_position)
//  m    u      m    b      a    i
// -6   -5     -4   -3     -2   -1 
// slice(1, 3)
console.log(city.slice(1));
"umbai"
console.log(city.slice(2))
"mbai"

console.log(city.slice(2, 5));
"mba"
console.log(city.slice(0, -1))
"mumba"
console.log(city.slice(0, -2));
"mumb"
console.log(city.slice(-2, 2))
''
console.log(city.slice(-2, -1))
a
console.log(city.slice(-1, -2))
''
console.log(city.slice(-2, 3)) // ""
console.log(city.slice(-2, 1)) // ""

var city = "amsTerdam"
// a m s T e r d a m
// 0 1 2 3 4 5 6 7 8
console.log(city.charAt(0).toUpperCase()); //A
console.log(city.charAt(3).toLowerCase()); // t
console.log(city.slice(1).toLowerCase()); // msterdam
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase() // Amsterdam

var city = "paRIs"
//   p  a  R  I  s
//   0  1  2  3  4  
city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
// Paris

var uname = "  paRis.  "
//  It calculate space as well        
console.log(uname.length);

console.log(uname.trim())// remove white spaces and return the string

var a = "I am learning Javascript"
// "I am learning JS"
console.log(a.replace('Javascript', 'JS'))
var a = "Javascript I am learning Javascript"
console.log(a.replace('Javascript', 'JS'));
//JS I am learning Javascript
var a = "JavaScript I am learning Javascript"
console.log(a.replace('Javascript', 'JS'));

var a = "JavaScript I am learning JavaScript"
console.log(a.replace(/JavaScript/g,'JS')); //replace all -/g - global modifier


var uname = "mumbai  .  "
console.log(uname.replaceAll(' ',''))
console.log(uname.replaceAll(/ /g,''))


var a  = "https://github.com/SangeethaShanmugm/Edu-Batch66"

console.log(a.split('/'));
// (5) ['https:', '', 'github.com', 'SangeethaShanmugm', 'Edu-Batch66']

var out = a.split('/')[3]
console.log(out)

var a  = "https://github.com/SangeethaShanmugm?tab=repositories"

console.log(a.split('/'));

var out = a.split('/')[2]
console.log(out)

var a = "JavaScript"
console.log(a.split(''));
// [10] ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

var b = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
console.log(b.toString())
//J,a,v,a,S,c,r,i,p,t
console.log(b.toString().replaceAll(',', '/'));
//JavaScript