const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./Routes/routes");
const app = express();
const cors = require("cors");
const PORT = 8055;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.get("/", (req,res) => {
    res.send("This is home page.")
})


//mongoDB connection
 mongoose.connect("mongodb://localhost:27017/zomatoApp", {
     useNewUrlParser: true,
     useUnifiedTopology: true
 }).then(() => {
     console.log("MongoDB connected successfully");
 }).catch(err => {
     console.error("MongoDB connection error:", err);
     process.exit();
 });

// Routes
app.use("/", router);

app.listen(PORT, ()=> {
    console.log(`server starts on port ${PORT}`);
})