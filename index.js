const express = require("express");
const db = require("./src/db");
const api = require("./src/api")

const app = express();
const router = express.Router();

/**
* Api route for GET: *
*/
app.use("*", api);

// Wait for DB to be ready before informing about location
db.ready().then(function(){
  console.log("Go to:", "http://localhost:8080");
}).catch(function(error){
  console.error(error);
  console.log("Terminating server");
  process.exit();
});

app.listen(8080);
