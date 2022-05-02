const url = require("url");

// console.log(url);

const newUrl = new URL(
  "http://mywesite.com:8080/hello.html?id=400&status=active"
);

console.log(newUrl.href);
console.log(newUrl.host);
console.log(newUrl.hostname); //Doesn't give us the port name
console.log(newUrl.pathname);
//Serialized query
console.log(newUrl.search);
console.log(newUrl.searchParams);
//Add params dynamially
newUrl.searchParams.append("newurl", "23132");

console.log(newUrl.searchParams);

newUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));
