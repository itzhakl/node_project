import jsonfile from 'jsonfile';

const readProducts = async () => {
    // console.log('before read file');
    const data = await jsonfile.readFile('./data/product_data.json');
    // console.log('after read file');
    return data;
    
}


const writeProducts = async (products) => {
    jsonfile.writeFile('../data/product_data.json', products);
    if (product_data) {
        product_data = await products;
        return true;
    } else {
        return "fail to write data";
    }
}

export default {readProducts, writeProducts };