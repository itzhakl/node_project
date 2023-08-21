import DAL from '../DAL/DAL.js';

const getAllProducts = async (req) => {

    let data = await DAL.readProducts();
    if (data) {
        return await data;
    } else {
        throw new Error('data is empty');
    }

}

const getUserById = async (id) => {
    if (DAL.readProducts()) {
        return (await DAL.readProducts()).filter(i => i.id === id);
    } else {
        return "fail to get data";
    }
}

const addProduct = async () => {
    let result;
    try {
        result = await DAL.addProduct()
    }
    catch (err) {
        console.error(err);
    }
}

export default {getAllProducts, getUserById, addProduct};