const DAL = require('../DAL/DAL.js');

const getAllProducts = async (req) => {
    const users = await DAL.getAllProducts();
    return users;
}

module.exports = {getAllProducts, };