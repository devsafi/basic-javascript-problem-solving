function oddAverage(numbers){
    const odd = [];
    for(const number of numbers){
        if(number % 2 === 1){
            odd.push(number);
        }
    }
    let sum = 0;
    for(const number of odd){
        sum = sum + number;
    }

    console.log('sum of odd numbers: ', sum)
    const count = odd.length;
    console.log('array length is: ', count)
    const avg = sum / count;
    return avg;
}

const numbers = [10, 3, 42, 65, 50, 89, 31];
const avg = oddAverage(numbers);
console.log('average number is: ', avg)