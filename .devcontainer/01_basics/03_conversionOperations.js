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