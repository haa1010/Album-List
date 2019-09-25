const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json()) // support json encoded bodies 
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())

app.get('/albums', (req, res) => {
    res.send({
        message: "hello"
    })
})


app.listen(process.env.PORT || 8081)