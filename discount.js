function discount(quantity) {
    if (quantity <= 100) {
        const price = quantity * 100;
        return price;
    }
    else if (quantity <= 200) {
        const price = quantity * 90;
        return price;
    }
    else {
        const price = quantity * 70;
        return price;
    }
}

const quantity = discount(210);
console.log(quantity);