const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const { authRoute } = require("./routes/index");
const morgan = require("morgan");
const { errorHandler } = require("./middleware");
const { notfound } = require("./Controller/notfound");

dotenv.config();

const connectdb = require("./init/mongodb");

const app = express();

// Connection for Database
connectdb();

app.use(express.json({ limit: "500mb" }));
app.use(bodyparser.urlencoded({ limit: " 500mb ", extended: true }));
app.use(morgan("dev"));

// Route Section
app.use("/api/v1/auth", authRoute);

//Not Found Ruote
app.use("*", notfound);

// error handling middleware
app.use(errorHandler);

module.exports = app;
