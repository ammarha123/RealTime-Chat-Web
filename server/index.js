const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");

const app = express();
require("dotenv").config()

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute)

//CRUD

app.get("/", (req, res) => {
    res.send("Welcome to our chat APIs...")
}) 

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, (req, res) => console.log(`Example app listening on port ${port}!`))
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connection Establised")).catch((error) => console.log("MongoDB Connection Failed: ", error.message));