let score = "33abc"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);   //gives NaN -- Not a Number


/*
"33"    =>33
"33abc" => NaN
true    => 1 
false   => 0
*/ 

let isLoggedIn = "Renuka"
let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
1        => true
0        =>false
" "      => true
""       => false
"Renuka" => true
*/

// ~~~~~~~~~~~~~~~~~~~~~ Operations ~~~~~~~~~~~~~~~~~~~~~~~~~ //

let value = 3 
let negValue = -value
console.log (negValue)


console.log(2**2)   // output 4
console.log(2**3)   // output 8
console.log(2/3)    // output 0.6666666666666666
console.log(2%3)    // output 2 --- % -->remainder


let str1 = "hello"
let str2 = "renuka"

console.log(str1+ str2)


console.log("1" + 2)       // 12
console.log(1 + "2")       // 12
console.log("1" + 2 + 2)   // 122
console.log(1 + 2 + "2")   // 32
console.log((3 + 4) * 8 % 5)


console.log(+true)  // output 1
console.log(+"")


let gameCounter = 100
gameCounter++; // 101
++gameCounter;  // 101+1 = 102

console.log(gameCounter)   

//diff bet prefix and postfix -- assignment