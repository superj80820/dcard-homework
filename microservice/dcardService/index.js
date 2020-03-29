const express = require('express');
const app = express();

app.use('/dcard', require('./router'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

