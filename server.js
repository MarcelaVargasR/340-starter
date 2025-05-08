/* ******************************************
 * This server.js file is the primary file of the
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const expressLayouts = require("express-ejs-layouts"); // Step 1: Require the layouts package
const env = require("dotenv").config();
const app = express();
const static = require("./routes/static");

/* ***********************
 * View Engine and Templates
 *************************/

app.set("view engine", "ejs"); // Step 2: Tell Express to use EJS instead .html
app.use(expressLayouts); // Step 3: Tell Express to use express-ejs-layouts
app.set("layout", "./layouts/layout"); // Step 4: Set default layout file path

// Index route
app.get("/", function (req, res) {
  res.render("index", { title: "Home" });
});

/* ***********************
 * Routes
 *************************/
app.use(static);

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT;
const host = process.env.HOST;

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`);
});
