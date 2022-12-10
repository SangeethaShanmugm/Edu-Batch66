let dbObj = {};
dbObj.user = [
  {
    uname: "Omkar",
    city: "delhi",
  },
  {
    uname: "kumar",
    city: "bangalore",
  },
];

dbObj.calc = {
  sum: function (a, b) {
    return a + b;
  },
  sub: (a, b) => {
    return a - b;
  },
};

//Import and Export
// 1. named - import and export - prefered
// 2. default - import and export

//es5
module.exports = dbObj;

//es6
// export default dbObj;
