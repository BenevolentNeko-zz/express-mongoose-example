const mongoose = require("mongoose");
const TestItem = require("./dataModels").TestItem;
mongoose.Promise = Promise;

const dbReady = new Promise(function(resolve, reject){
  mongoose.connect("mongodb://localhost");
  mongoose.connection.on('error', reject);
  mongoose.connection.on('open', function(){
    new TestItem({
      alpha: 1,
      beta: "something",
      gamma: true
    }).save().then(function(item){
      console.log("saved Item to DB:", item);
      resolve();
    }).catch(reject);
  });
});

module.exports = {
  ready: () => dbReady,
  find: (item) => TestItem.find
}
