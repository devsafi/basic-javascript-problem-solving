// inch to feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

const safiHeight = inchToFeet(64);
console.log(safiHeight.toFixed(2));

// complex

function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + " feet " + inchRemaining + " inch ";
    return result;
}

const myHeight = inchToFeet2(64);
console.log(myHeight);

// mile to kilometer

function mileToKm(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

const km5 = mileToKm(5);
console.log(km5);