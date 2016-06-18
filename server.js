const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

module.exports = exports = app.use(express.static(__dirname + '/build'))
.listen(PORT, () => console.log('server up on ' + PORT));
