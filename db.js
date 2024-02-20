//import mongoose
const mongoose = require('mongoose');

//connect to mongoDB
mongoose.connect('mongodb://localhost/annestouna', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
//deplay msg connected or error
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));