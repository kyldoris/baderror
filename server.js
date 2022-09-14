const express = require("express")
const methodOverride = require("method-override")
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const searchBarController = require("./controllers/searchBar.index.js")


// DATABASE CONFIG
mongoose.connect(process.env.DATABASE_URL)


// MIDDLEWARE
app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({extended: false}))
// app.use <- MIDDLEWARE diercting a certain traffic to a specific controller 
app.use(methodOverride("_method"))
app.use("/searchBar", searchBarController)



// ROOT ROUTE
app.get("/recipes", (req, res) =>{
    res.render("index.ejs")
})



const db = mongoose.connection;
db.on("error", (err) => console.log(`${err.message} is mongod not running?`));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo is disconnected "));

// LISTENER
app.listen(3000, () =>{
    console.log("listening....")
})
