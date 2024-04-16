const express = require("express");
const app = express();

//include route files
const usersRoute = require("./routes/users");
app.get("/", (req, res) => {
  res.send("<h1>This is a test server</h1>");
});

//Use routes

app.use("/users", usersRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
