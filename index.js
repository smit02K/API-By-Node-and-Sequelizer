const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const db=require("./db.config ")

const controller=require("./customer.controller")

db.sequelize.sync();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/customers/new', function (req, res){
   controller.createCustomer(req,res);
})
app.get('/customers/', function (req, res){
    controller.findAllCustomer(req,res);
 })
 app.get('/customers/:email', function (req, res){
    controller.findCustomerByEmail(req, res);
 })
 app.put('/customers/update', function (req, res){
    controller.updateCustomer(req, res);
 })
 app.delete('/customers/delete/:email', function (req, res){
    controller.deleteCustomer(req, res);
 })
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})