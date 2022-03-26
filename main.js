const numbers = [1, 3, 5, 8];
const products = [];

// want to compare a given number to the number to its right 
// we want to multply those 2 numbers together 
// find some way to store the result (or the product)
// return the largest product


for (let i = 0; i < numbers.length; i++) {
 
 let currentNum = numbers[i];
 // this lists the numbers 
 let nextNum =  numbers[i + 1];
 
 // this code compares the number to the number to its right

 let product = currentNum * nextNum;
 // this multiplies each number to the number to its right 
 if (product) {
   products.push(product);
   // this works because NaN is falsey
 }
}
// 8 * undefined = NaN, need to remove;  

var largestProduct = Math.max(...products);
console.log(largestProduct);
// 40
