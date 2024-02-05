const l = 96;
const t = 69;

if (l > t) {
    // console.log('l is the top scorer');
}
else {
    // console.log('t is the top scorer');
}

function getMax(num1, num2) {

    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

let max = getMax(69, 96);
// console.log('max of two is:', max);


let jim = 4;
let kim = 63;
let tim = 74;


if (jim > kim && jim > tim) {
    // console.log('jim is greater');
}
else if (kim > jim && kim > tim) {
    // console.log('kim is greater');
}
else {
    // console.log('tim is greater')
}

function getMax3(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}

const max3 = getMax3(10, 47, 3);
// console.log('the big number is:', max3);



// const arr = [10, 29, 34, 5, 54, 243, 332, 34];
// const maxult = Math.max(arr);
const maxult = Math.max(10, 29, 34, 5, 54, 243, 332, 34);
console.log('ultimate max number is: ', maxult);