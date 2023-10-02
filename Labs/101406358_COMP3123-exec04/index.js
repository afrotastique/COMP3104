// when ever u want to search either get or post is fine
// submitting some info: use post
// for signing up and secure things we use post

var express = require("express");
var app = express();

const SERVER_PORT = 4000;


app.use("/test", express.static("./public"));


// https://localhost:4000/
app.get("/", (req, res) => {
  res.status(201).send("<h1>Welcome to Express server</h1>");
  // res.end
});

// https://localhost:4000/home
app.get("/home", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// https://localhost:4000/person
app.post("/person", (req, res) => {
  const p = {
    pid: 1,
    pnm: "julien",
  };

  // SEND AND JSON GIVES THE SAME RESULT BUT JSON IS BETTER FOR COMPLEX STUFF
  res.json(p);
});

app.get("/person", (req, res) => {
  const p = {
    pid: 1,
    pnm: "julien",
    city: "toronto",
  };
  res.send(p);
});

// julien is a path parameter
// query is what we have after ? mark
// PATH PARAMETER /
// https://localhost:4000/person/julien

// QUERY PARAMETER ?
// https://localhost:4000/person?fnm=julien

// when we see : in the path it shows we are accepting parameter
app.get("/student/:fname/:lname", (req, res) => {
  // res.json(req.params)
  const { fname, lname } = req.params;
  res.send(`welcome ${fname} ${lname}`);
});

app.get("/emp", (req, res) => {
  //   res.send(req.query);
  if (req.query.fnm === undefined) {
    res.send("please enter your first name");
  }
});
app.listen(SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});
