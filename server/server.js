/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 3000;

// app.use(express.urlencoded)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
