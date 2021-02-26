const express      = require("express");
const cors         = require("cors");

const indexRouter  = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use("/", indexRouter);


module.exports = app;
