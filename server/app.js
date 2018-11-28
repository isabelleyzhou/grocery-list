const express = require('express');
const indexRouter = require('./routes/index');

var cors = require('cors')

const app = express();
const port = normalizePort(process.env.PORT || '8080');

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const port = parseInt(val, 10);
  
    if (Number.isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

app.use(cors())
app.use('/api', indexRouter);
app.listen(port, () => console.log(`Server listening on port ${port}.`))

module.exports = app;