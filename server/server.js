require('dotenv').config();
const express = require('express');
const axios = require()
const app = express();
const { PORT } = process.env;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mvp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((err) => {
    console.error('Error connecting to the DB');
  });

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));