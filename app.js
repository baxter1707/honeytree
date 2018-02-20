const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const models = require('./models')
const mustacheExpress = require('mustache-express')
const methodOverride = require('method-override')
const expressValidator = require('express-validator')

app.use(bodyParser.urlencoded({extended:false}))
app.engine('mustache', mustacheExpress())
app.use(methodOverride('_method'))
app.use(expressValidator())
app.set('view engine', 'mustache')
app.set('views', './views')





app.get('/', (req,res) => {
  res.render('home')
})

app.post('/'),(req,res) =>{
  models.honey.create({
    name: req.body.itemname,
    price: req.body.price,
    description: req.body.desc,
    type: req.body.type
  }).then(() =>{
    res.redirect('/')
  })
}







app.listen(3000, () =>{
  console.log('We are live on channel 3000')
})
