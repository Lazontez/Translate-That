const express = require("express");
const routes = require("./routes/index.js");
const app = express();


const PORT = process.env.PORT || 3001;
const path = require("path")
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join("public/")))
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Api Routes
app.use(routes);
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT http://localhost:${PORT} !`);
});
