require('dotenv').config();
const express = require("express");
const router = require('./routes/user.routes');

const app = express();
const PORT = process.env.APP_PORT ?? 5000;

app.use(express.json());

app.use('/api', router);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`server is listening on port ${PORT}`);
  }
});