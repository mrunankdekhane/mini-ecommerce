const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.dashboard);
router.get('/add', adminController.addProductPage);
router.post('/add', adminController.createProduct);
router.get('/edit/:id', adminController.editProductPage);
router.put('/edit/:id', adminController.updateProduct);
router.delete('/delete/:id', adminController.deleteProduct);

module.exports = router;