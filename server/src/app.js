const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/login', (req, res) => {
  res.send({
    message: `Bienvenue ${req.body.email}, ${req.body.password}!!!`
  })
})
app.listen(process.env.PORT || 8081)
