const express = require('express');
const router = express.Router();
const ProductService = require('../service/product.service');

const service = new ProductService();
router.get('/', (req, res) => {
  const products = service.find();
  res.send(products);
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findById(id);
  res.json(product);
})
router.post('/', (req, res) => {
  const body = req.body;
  res.json(
    {
      created: "23/02/23",
      lili: body
    }
  )
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.json(
    {
      created: "update",
      lili: body,
      id,
    }
  )
})
router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.json(
    {
      created: "update",
      lili: body,
      id,
    }
  )
})
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.json(
    {
      message: "deleted",
      id
    }
  )
})
module.exports = router;
