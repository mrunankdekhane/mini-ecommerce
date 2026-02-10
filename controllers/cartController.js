const Product = require('../models/Product');

exports.getCart = (req, res) => {
  const cart = req.session.cart || [];
  res.render('cart', { cart });
};

exports.addToCart = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!req.session.cart) req.session.cart = [];

  const existing = req.session.cart.find(i => i.product._id == product._id);

  if (existing) existing.quantity += 1;
  else req.session.cart.push({ product, quantity: 1 });

  res.redirect('/cart');
};