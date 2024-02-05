function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false
    }
}

const lipiYear = isLeapYear(2030);
console.log(lipiYear);


function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false
    }
}

const lipiYear2 = isLeapYear(2040);
console.log(lipiYear2);



function isLeapYear(year) {
    if (year % 100 !== 0 && year % 4 == 0) {
        return true;
    }
    else {
        return false
    }
}

const lipiYear3 = isLeapYear(2100);
console.log(lipiYear3);




function isLeapYear(year) {
    if (year % 100 !== 0 && year % 4 == 0) {
        return true;
    }
    else if (year % 100 == 0 && year % 400 == 0) {
        return true;
    }
    else {
        return false
    }
}

const lipiYear4 = isLeapYear(2100);
const lipiYear5 = isLeapYear(2400);
const lipiYear6 = isLeapYear(1900);
const lipiYear7 = isLeapYear(2052);
console.log(lipiYear4, lipiYear5, lipiYear6, lipiYear7);