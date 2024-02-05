const height = [23, 58, 45, 66, 55, 94, 73];

function getHieght(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const max = getHieght(height);
console.log('max height is: ', max);


// ----------------------------------------------


const heights = [23, 58, 45, 66, 55, 94, 73];

function getHieghts(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num < max) {
            max = num;
        }
    }
    return max;
}

const min = getHieghts(height);
console.log('min height is: ', min);