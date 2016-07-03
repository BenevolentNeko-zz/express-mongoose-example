const express = require('express');
const db = require("./db");

const router = express.Router();

router.get("/", function(request, response){
  return db.findOne({alpha:1}).then(function(data){
    response.json(data);
  }).catch((err) => response.status(500).send(err));
});

module.exports = router;
