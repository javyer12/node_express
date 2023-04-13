const express = require('express');

const productsRouter = require('./product.route');
const userRouter = require('./user.route');

function routerApi(app) {
  const router = express.Router();
  // app.use('/api/v1', router);
  app.use('/products', productsRouter);
  app.use('/users', userRouter);
}

module.exports = routerApi;
