const express = require('express');
const db = require('./db/index');
const indexRouter = require('./routes/index');

const app = express();
const port = 8080;

app.use('/api', indexRouter);
app.listen(port, () => console.log(`Server listening on port ${port}.`))

module.exports = app;