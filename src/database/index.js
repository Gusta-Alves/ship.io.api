const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const connectString = MONGO_URL || "mongodb://localhost:27017/shipioApi";

mongoose.connect(connectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));

module.exports = mongoose;