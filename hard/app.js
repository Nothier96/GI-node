const express = require("express");
const app = express();
const morgan = require("morgan");
const fs = require("fs");
const port = 8080;

// app.use(express.json());

const data = require("./employee.json");
app.get("/", function (req, res) {
  res.json(data);
});
app.get("/:id", function (req, res) {
  const id = req.params.id;
  res.json(data[id]);
});

// fs.readFile("employee.json", function (err, data) {
//   if (err) throw err;
//   const emp = JSON.parse(data);
//   console.log(emp);
// });
// app.get("/", (req, res) => {
//   res.status(200).send(
//       {
//     name: "Thierno",
//     salary: 100000,
//   });
// });

// app.post("/tshirt/:id", (req, res) => {
//   const { id } = req.params;
//   const { salary } = req.body;

//   if (!salary) {
//     res.status(418).send({ message: "We need a logo!" });
//   }
//   res.send({
//     name: `Thierno makes ${salary} and has an id of ${id}`,
//   });
// });

app.listen(port, () => {
  console.log(`it's live on http://localhost:${port}`);
});
app.use((req, res) => {
  res.status(404).send("Sorry , wrong ID!");
  //   res.end();
});
