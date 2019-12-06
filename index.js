const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const corsMiddleware = cors();
const parserMiddleware = bodyParser.json();
const db = require("./db");
const imageModel = require("./image/model");
const imageRouter = require("./image/router");
const port = process.env.PORT || 4000;

app.use(corsMiddleware);
app.use(parserMiddleware);
app.use(imageRouter);

app.listen(port, console.log(`listening on port ${port}`));
