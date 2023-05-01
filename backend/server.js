const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const router = require("./routes/route")
const bodyParser = require("body-parser")

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://JKomieter:JoEl0242@cluster0.ip7dujc.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Connected to DataBase"))
.catch((err) => console.log(err))

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)
app.use(cors())


app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`))