const express = require('express')
const app = express()
let homeRoute = require("./src/js/home") //TODO
let goodRoute = require("./src/js/goods")
let marketRoute = require("./src/js/markets")
let path = require('path')
let bodyParser = require('body-parser')


//The body-parser middleware module, added to the Express.js app, will try to parse the body content 
//       (URL encoded or JSON) of the post request and store it in req.body object.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
 
app.use(homeRoute)
app.use(goodRoute)
app.use(marketRoute)

app.use(express.static('public'))
const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.info(`Server has started on ${PORT}`))  // Back ticks so I can add a variable