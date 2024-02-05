function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item)
        }
    }
    return unique;
}
const biryaniKhor = ['safi', 'safi', 'sagor', 'najmul', 'najmul']
const numbers = [1, 3, 4, 1, 4, 5, 43, 5]
const uniqueArray = noDuplicate(biryaniKhor);
const uniqueArray2 = noDuplicate(numbers);
console.log(uniqueArray);
console.log(uniqueArray2);