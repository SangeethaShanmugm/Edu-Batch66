const fs = require("fs");


// const data = "awesome";
// fs.writeFile("note.txt", data, () => {
//   console.log("File created");
// });

// const niceQuote = "\nMake everyday a little less ordinary ";

// fs.appendFile("note.txt", niceQuote, () => {
//   console.log("File appended");
// });

fs.readFile("note.txt", "UTF-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.rename("note.txt", "note.csv", (err) => {
  if (err) throw err;
  console.log("file renamed");
});

fs.unlink("./note.csv", (err) => {
  console.log("file deleted");
});
