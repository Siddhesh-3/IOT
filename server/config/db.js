require("dotenv").config();

const mongoose = require("mongoose");

const url = process.env.DATABASE_LINK;

const startConnection = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Succesfully connected to mongodb");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = startConnection;
