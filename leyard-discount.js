function leyardDiscountTotal(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if (quantity <= 100) {
        const first100total = quantity * first100Price;
        return first100total;
    }
    else if (quantity <= 200) {
        const first100total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingQuantityPrice = remainingQuantity * 90;
        const second100total = first100total + remainingQuantityPrice;
        return second100total;
    }
    else {
        const first100total = 100 * first100Price;
        const second100total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingQuantityPrice = remainingQuantity * above200Price;
        const aboveTotal = first100total + second100total + remainingQuantityPrice;
        return aboveTotal;

    }
}

const quntity = leyardDiscountTotal(221);
console.log(quntity);