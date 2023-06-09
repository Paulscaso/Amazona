import express from 'express';
import Product from '../model/productModel.js';


const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
//   console.log(products);
  res.send(products);
});
productRouter.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'product not found' });
  }
});
productRouter.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    console.log(product)
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'product not found' });
  }
});
export default productRouter;
