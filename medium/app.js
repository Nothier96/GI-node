const fs = require("fs");

fs.readFile("./planet.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
