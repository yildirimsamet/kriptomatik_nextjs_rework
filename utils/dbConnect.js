const mongoose = require("mongoose");
const dbConnect = () => {
  mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) throw err;
    }
  );
};
module.exports = dbConnect;
