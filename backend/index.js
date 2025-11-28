require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connect to MongoDB
const uri = process.env.MONGO_URL;

main()
  .then((res) => console.log("connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

//Routers
app.get("/", (req, res) => {
  res.send("HEY");
});

//Start the server
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`app is running at port http://localhost:${PORT}`);
});
