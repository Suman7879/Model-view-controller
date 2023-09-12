const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/company")

const express = require("express");
const app = express();

const employeeRoute = require("./routes/employeesRoute")

app.use('/',employeeRoute)



app.listen(3000, function () {
    console.log("server is running");

})