const express = require('express');
const BL = require('../BL/BL.js');

const getAllProducts = async (req, res) => {
    const Users = await BL.getAllProducts(req);
    res.json(Users);
};

module.exports = {getAllProducts, };