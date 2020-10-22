const express = require('express');

const routes = express.Router();

const homeController = require('./controllers/HomeController');

routes.get('/', homeController.index);
routes.get('/category/:category', homeController.filter);
routes.get('/category/:category/:cd_product', homeController.show);
routes.get('/search/:param', homeController.search);

module.exports = routes;
