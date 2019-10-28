import Sequelize, { Model } from 'sequelize';
//const Products = require('sequelize');

class Products extends Model {
  static init(sequelize) {
    super.init(
      {
        CodProduto: Sequelize.STRING,
        NumProduto: Sequelize.STRING,
        Produto: Sequelize.STRING,
        QuantEstoque: Sequelize.FLOAT,
        PrecoVenda: Sequelize.DECIMAL(10, 2),
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Products;
