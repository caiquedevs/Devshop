/* eslint-disable eqeqeq */
/* eslint-disable no-throw-literal */
const products = require('../database/products.json');

module.exports = {
  index(req, res) {
    try {
      return res.status(200).json(products);
    } catch (e) {
      return res.status(404).json({ error: e.msg });
    }
  },

  filter(req, res) {
    try {
      const { category } = req.params;
      const filtered = products.filter((product) => product.category === category);

      if (filtered <= 0) {
        return res.status(404).json({
          error: 'No products for this category',
          status: '404',
        });
      }

      return res.status(200).json(filtered);
    } catch (e) {
      return res.status(404).json({ error: e.msg });
    }
  },

  show(req, res) {
    try {
      const { category, cd_product } = req.params;

      const filtered = products.filter(
        (product) => product.category === category && product.id === cd_product,
      );

      if (filtered <= 0) {
        return res.status(404).json({
          error: 'No products for this category',
          status: '404',
        });
      }

      return res.status(200).json(filtered[0]);
    } catch (e) {
      return res.status(404).json({ error: e.msg });
    }
  },

  search(req, res) {
    try {
      const { param } = req.params;

      // eslint-disable-next-line arrow-body-style
      const responseSearch = products.filter((product) => {
        return product.name.toUpperCase().includes(param.toUpperCase());
      });

      return res.status(200).json([...responseSearch]);
    } catch (e) {
      return res.status(500).json({ error: e.msg });
    }
  },
};
