import express from 'express';
import BL from '../BL/BL.js';

const getAllProducts = async (req, res) => {
    try {
        let result = await BL.getAllProducts(req);
        res.send(result);
    }
    catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
    
};

const getUserById = async (req, res) => {
    try {
        let result = await BL.getUserById(+req.params.id);
        res.send(result);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
}

const addProduct = async (req, res) => {
    try {
        let result = await BL.addProduct(req.body)
        res.send(result);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
}

const updateProduct = async (req, res) => {
    try {
        let result;
        res.send(result);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
}

const updateAmount = async (req, res) => {
    try {
        let result;
        res.send(result);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
}

const deleteProduct = async (req, res) => {
    try {
        let result;
        res.send(result);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
}

export default {getAllProducts, getUserById, addProduct, updateProduct, updateAmount, deleteProduct};