function multiply(num1, num2) {
    if (typeof num1 !== 'number' && typeof num2 !== 'number') {
        return "please provide number first"
    }

    const mul = num1 * num2;
    return mul;
}

const result1 = multiply(5, 'seven');
const result = multiply(5, 7);
console.log(result);
console.log(result1);



// ===================================================



function name(name1, name2) {
    if (typeof name1 !== 'string' && typeof name2 !== 'string') {
        return "please provide string"
    }

    const full = name1 + ' ' + name2;
    return full;
}

const fullName1 = name(5, 'Safi');
const fullName2 = name('Ahmed', 'Safi');
const fullName3 = name('Safi');
console.log(fullName1);
console.log(fullName2);
console.log(fullName3);



// ===================================================



function getSecond(number) {
    if (Array.isArray(number) === false) {
        return "please provide an array"
    }
    const second = number[2];
    return second;
}

const second = getSecond(5);
const second1 = getSecond([10, 29, 39]);
console.log(second);
console.log(second1);