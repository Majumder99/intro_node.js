// // // console.log("hello from node.js");

// // const person = require("./person");
// // console.log(person);
// // console.log(person.name);

// const Person = require("./person");
// const person1 = new Person("Sourav", 22);
// // console.log(person1.greeting());
// person1.greeting();

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "home.html"),
  //     "utf8",
  //     (err, data) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-type": "text/html" });
  //       res.end(data);
  //     }
  //   );
  // }
  // if (req.url === "/about") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "about.html"),
  //     "utf8",
  //     (err, data) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-type": "text/html" });
  //       res.end(data);
  //     }
  //   );
  // }
  // if (req.url === "/api/users") {
  //   const users = [
  //     { name: "sourav", age: 25 },
  //     { name: "majumder", age: 28 },
  //   ];
  //   res.writeHead(200, { "Content-type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }

  //Build path
  let file_path = path.join(
    __dirname,
    "public",
    req.url === "/" ? "home.html" : req.url // Otherwise whatever the url will load
  );

  //Extension of file
  let extname = path.extname(file_path);

  //Initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jgp";
      break;
  }

  //Read file
  fs.readFile(file_path, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        //Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //Some server error
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
