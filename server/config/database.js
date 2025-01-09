const mongoose = require("mongoose");

exports.dbConnect = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/mydatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Db connected success ✅"))
    .catch((err) => console.error(err));
};
