const mongoose = require("mongoose");

exports.dbConnect = async () => {
  await mongoose
    .connect("mongodb+srv://Ankit290101:MongoDb@cluster0.kdeds.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Db connected success ✅"))
    .catch((err) => console.error(err));
};
