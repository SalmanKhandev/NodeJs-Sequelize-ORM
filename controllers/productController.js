const db = require('../models');

// create main model

const Product = db.products;
const Review = db.reviews;



// 1. Create product

const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published :false
    }
    
    const product = await Product.create(info);
    res.status(200).send(product);
}


// 2. get all products

const getAllProducts = async (req, res) => {
    let products = await Product.findAll({});
    res.status(200).send(products)
}

// 3. 


const getOneProduct = async (req, res) => {

      let id = req.params.id
      let product = await Product.findOne({ where: { id: id } })
      res.status(200).send(product)

}
