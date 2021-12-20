const mongoose = require("mongoose");
function connectDB(string) {
  return mongoose.connect(string).then(() => console.log("Database connected"));
}
module.exports = connectDB;
