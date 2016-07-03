const mongoose = require("mongoose");

module.exports = {
  TestItem: mongoose.model('Foobar', {
    alpha: Number,
    beta: String,
    gamma: Boolean
  })
};
