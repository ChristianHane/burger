const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes/routes.js");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, './views')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});