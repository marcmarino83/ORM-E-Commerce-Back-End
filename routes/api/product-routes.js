const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve products', error: err });
  }
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });
    if (!product) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve product', error: err });
  }
});

// create new product
router.post('/', async (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
    Product.create({
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    })
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => ({
          product_id: product.id,
          tag_id,
        }));
        return ProductTag.bulkCreate(productTagIdArr)
          .then(() => res.status(200).json(product));
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .catch((err) => {
      res.status(400).json({ message: 'Failed to create product', error: err });
    });
});

// update product
router.put('/:id', async (req, res) => {
  try {
    await Product.update(req.body, {
      where: { id: req.params.id },
    });

    if (req.body.tagIds && req.body.tagIds.length) {
      const productTags = await ProductTag.findAll({
        where: { product_id: req.params.id },
      });

      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => ({
          product_id: req.params.id,
          tag_id,
        }));

      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }

    res.status(200).json({ message: 'Product updated successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Failed to update product', error: err });
  }

      return res.json(product);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });


router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const product = await Product.destroy({
      where: { id: req.params.id },
    });
    if (!product) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete product', error: err });
  }
});

module.exports = router;
