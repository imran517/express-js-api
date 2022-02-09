const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3000

app.use(express.json());
routes(app);

app.use(function(req, res) {
    res.status(404).send({ host: `${req.host}`, url: `${req.originalUrl}`, method: `${req.method}`, message: 'not found'})
  });

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`)
})
