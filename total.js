const products = [
    { name: 'shirt', price: 100000 },
    { name: 'chiruni', price: 20000 },
    { name: 'kombol', price: 80000 },
    { name: 'tel', price: 70000 },
    { name: 'shampo', price: 1000 },
    { name: 'ayna', price: 40000 },
    { name: 'lipstick', price: 60000 }
]

function totalproducts(products) {
    let total = 0;
    for (const product of products) {
        total = total + product.price;
    }
    return total;
}

const total = totalproducts(products);
console.log('ajke total', total, 'taka khoshabe');