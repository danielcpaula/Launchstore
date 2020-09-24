const express = require('express')
const ProductController = require('./app/controllers/ProductController')
const routes = express.Router()


routes.get('/', function(req, res) {
  return res.render("layout.njk")
})

routes.get('/products/create', function(req, res) {
  return res.redirect("layout.njk")
})

routes.get('/ads/create', ProductController.craete)




module.exports = routes
