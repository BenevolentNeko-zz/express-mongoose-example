const app = require("express")();
const db = require("./db");

/**
* Api route for GET: *
*/
app.get("*", function(request, response){
  return db.find({alpha:1}).then(function(data){
    response.json(data);
  }).catch(response.status(500).send);
});

// Wait for DB to be ready before informing about location
db.ready().then(function(){
  console.log("Go to:", "http://localhost:8080");
}).catch(function(error){
  console.error(error);
  console.log("Terminating server");
  process.exit();
});

app.listen(8080);
