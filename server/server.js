const express = require("express");
const app = express();

const database = require("./config/db");
database();
app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/user", require("./routes/user_route"));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
