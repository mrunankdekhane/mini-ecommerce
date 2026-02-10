const Product = require('../models/Product');
const Category = require('../models/Category');

exports.dashboard = async (req, res) => {
  const products = await Product.find().populate('category');
  res.render('admin/dashboard', { products });
};

exports.addProductPage = async (req, res) => {
  const categories = await Category.find();
  res.render('admin/add-product', { categories });
};

exports.createProduct = async (req, res) => {
  await Product.create(req.body);
  res.redirect('/admin');
};

exports.editProductPage = async (req, res) => {
  const product = await Product.findById(req.params.id);
  const categories = await Category.find();
  res.render('admin/edit-product', { product, categories });
};

exports.updateProduct = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/admin');
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/admin');
};