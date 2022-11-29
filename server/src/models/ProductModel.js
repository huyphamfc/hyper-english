const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  bgColor: String,
  imgSrc: String,
  imgAlt: String,
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
