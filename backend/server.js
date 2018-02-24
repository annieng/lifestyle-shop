const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.argv[2] | 4420
const fs = require ('fs')

// installing middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// data looks like
let cart = []

fs.readFile('cart.json', (err, data) => {
  if(data) {
    cart = JSON.parse(data)
  }
})

app.get('/shop', (req, res) => {
  // return cart
  if(cart) res.json(cart)
  else res.json({status: 'error', error: 'cart not found'})


})

app.post('/shop', (req, res) => {
  // save cart
  console.log(req.body)
  let newCart = req.body.cart

  fs.writeFile('cart.json', JSON.stringify(newCart))
  res.json({success: true})
})



app.listen(port, () => {
  console.log('welcome to the high life baby on port: ' + port)
})