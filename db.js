const mongoose = require("mongoose");
const URL = process.env.URL;
const mongoConnect = () => {
  mongoose.connect(URL, () => {
    console.log("Mongodb connected");
  });
};
module.exports = mongoConnect;
