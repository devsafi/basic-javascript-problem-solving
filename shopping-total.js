const products = [
    { name: 'shirt', price: 1000, quntity: 1 },
    { name: 'shari', price: 2000, quntity: 2 },
    { name: 'chiruni', price: 20, quntity: 1 },
    { name: 'kombol', price: 800, quntity: 2 },
    { name: 'tel', price: 70, quntity: 2 },
]

function carttotal(products) {
    let total = 0;
    for (const product of products) {
        const perProductCost = product.price * product.quntity;
        total = total + perProductCost;
    }
    return total;
}

const total = carttotal(products);
console.log('ajke total', total, 'kichu nilam');