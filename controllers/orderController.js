const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  const cart = req.session.cart || [];

  const items = cart.map(i => ({
    product: i.product.name,
    price: i.product.price,
    quantity: i.quantity
  }));

  const totalAmount = items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  await Order.create({ items, totalAmount });

  req.session.cart = [];

  res.render('order-success');
};