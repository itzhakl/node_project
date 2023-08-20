const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.get('/all', (req, res) => {
    controller.getAllProducts(req, res);
});

router.get('/:id', (req, res) => {
    //code..
});

router.post('/new-product', (req, res) => {

});

router.put('/update-product', (req, res) => {

});

router.put('/products/update-amount', (req, res) => {

});

router.delete('/products/delete-product', (req, res) => {

})

module.exports = router;