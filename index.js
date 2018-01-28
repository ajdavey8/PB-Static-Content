const express = require('express');
const app = express();
const contents = require('./contents.js');

app.use('/:page', contents);

app.listen(3000, () => console.log('app listening on port 3000!'));

module.exports = app;
