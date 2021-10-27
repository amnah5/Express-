const products = require("../../products");
const product = require("../../db/models/product");
const Product = require("../../db/models/Product");

exports.productListFetch = async (req, res) => {
  try {
    const products = await product.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.productCreate = async (req, res) => {
  try {
    const newProduct = await Product.create();
    return res.status(201).json(req.body);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.productDelete = async (req, res) => {
  //   const productId = req.params.productId;
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    if (product) {
      await product.remove();
      return res.status(204).end();
    } else {
      return res.status(404).json({ message: "Product not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.productUpdate = async (req, res) => {
  //   const productId = req.params.productId;
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    if (product) {
      const updatedProduct = await Product.Update(product, req.body);
      return res.json(updatedProduct);
    } else {
      return res.status(404).json({ message: "Product not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
