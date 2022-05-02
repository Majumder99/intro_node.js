// fs = file system
const fs = require("fs");
const path = require("path");

//create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder is created....");
// });

//Write file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello world!",
//   (err) => {
//     if (err) throw err;
//     console.log("File is created....");
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "This is new world!",
//       (err) => {
//         if (err) throw err;
//         console.log("File is created....");
//       }
//     );
//   }
// );

// Only last file will be written
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "This is new world!",
//   (err) => {
//     if (err) throw err;
//     console.log("File is created....");
//   }
// );

//Read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "hellowordl.txt"),
  (err) => {
    if (err) throw err;
    console.log("file is created");
  }
);
