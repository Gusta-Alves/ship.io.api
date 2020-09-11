const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));

module.exports = mongoose;