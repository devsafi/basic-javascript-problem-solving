const phone = [
    { name: 'samsung', price: 100000 },
    { name: 'poco', price: 20000 },
    { name: 'lava', price: 80000 },
    { name: 'vivo', price: 70000 },
    { name: 'iphone', price: 1000 },
    { name: 'oppo', price: 40000 },
    { name: 'walton', price: 60000 }
]

function cheapestPhone(phones) {
    let min = phone[0];
    for(const phn of phones){
        if(phn.price < min.price){
            min = phn;
        }
    }
    return min;
}

const phn = cheapestPhone(phone);
console.log(phn);