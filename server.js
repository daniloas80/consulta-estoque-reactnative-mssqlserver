import Product from './src/app/models/Products';

const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_amoinox', 'sa', 'unidata', {
  host: '10.211.55.3',
  dialect: 'mssql',
});

//sequelize.sync();

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');

    // sequelize
    //   .query(
    //     'SELECT TOP (10) CodProduto, NumProduto, Produto, QuantEstoque, PrecoVenda FROM tab_produto',
    //     { raw: true }
    //   )
    //   .then(projects => {
    //     console.log(JSON.stringify(projects));
    //   });

    // Product.findAll({ limit: 10 }).then(project => {
    //   console.log(JSON.stringify(project));
    // });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//   sequelize.close();
app.get('/produtos/:id', function(req, res) {
  sequelize
    .query(
      'SELECT CodProduto, NumProduto, Produto, QuantEstoque, PrecoVenda FROM tab_produto WHERE NumProduto LIKE :NumProduto', {
        replacements: { NumProduto: `%${req.params.id}%`},
        type: sequelize.QueryTypes.SELECT
      })
      .then((metadata) => {
        // Results will be an empty array and metadata will contain the number of affected rows.
        res.json(metadata);
      })
      // .then(rows => {
      //   res.send(JSON.stringify(rows))
      // })

    // .then(projects => {
    //   //console.log(JSON.stringify(projects));
    //   res.json(projects);
    // }
    // );
});

const server = app.listen(3333, function() {
  const host = server.address().address;
  const { port } = server.address();
});
