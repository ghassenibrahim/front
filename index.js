
const express = require('express');
var cors = require('cors')
const app = express()
const port =3000
app.get('/', (req, res) =>res.json({data:'Secret data'}))
app.listen(port,  () =>
  console.log('CORS-enabled web server listening on port 80')
)
