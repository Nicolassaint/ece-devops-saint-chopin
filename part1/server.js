'use strict';

const express = require('express');

const PORT = 8080;

const app = express();
app.get('/', (req, res) => {
  res.send('Thomas Chopin and Nicolas Saint!');
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
