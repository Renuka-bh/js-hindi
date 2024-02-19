console.log(2 > 1);
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)


console.log("2" > 1)  // true
console.log("02"> 1)  // true

// ~~~~~~ always avaoid below conversions while writing the code ~~~~~
console.log(null > 0)   // false
console.log(null == 0)  // false
console.log(null < 0)   // false
console.log(null >= 0)  // true

/*
The reason is that an equality check == and 
comparision >, <, >=, <= work differently.
Comparision convert null to a number, treating it as 0.
That's why null >= 0 is true and null > 0 is false
*/

console.log(undefined == 0)   //false
console.log(undefined > 0)    // false
console.log(undefined < 0)    // false
console.log(undefined >= 0)   // false
console.log(undefined <= 0)   //false

//  strict check --> ===

console.log("2" === 2)   // false