import express from 'express';
import controller from '../controller/controller.js';

const router = express.Router();

router.get('/all', (req, res) => {
    controller.getAllProducts(req, res);
});

router.get('/:id', (req, res) => {
    controller.getUserById(req, res);
});

router.post('/new-product', (req, res) => {
    controller.addProduct(req, res);
});

router.put('/update-product', (req, res) => {
    controller.updateProduct(req, res);
});

router.put('/update-amount', (req, res) => {
    controller.updateAmount(req, res);
});

router.delete('/delete-product', (req, res) => {
    controller.deleteProduct(req, res);
})

export default router;