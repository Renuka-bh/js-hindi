/*
~~~ Primitive ~~~ -->call by value
7 types
String
Number
Boolean
null
undefined
Symbol
BigInt
*/

/*
~~~~~ Referance type/ non-primitive data type  ~~~~~~~~
Array
Objects
Functions
*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let useremail 

/* 
JavaScript is a dynamically typed language, 
which means that data types of variables are determined by 
the value they hold at runtime and can change throughout the program 
as we assign different values to them
*/ 

// Using Symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)   //false

//using BigInt

const bigNmber = 245596882311n

console.log(typeof bigNmber)   //bigint

//Arrays

const heros = ["shaktiman", "nagraj", "doga"];

let myObj = {
    name: "Renuka",
    age: 25
}

const myfunction = function() {
console.log("Hello World");
}

console.log(typeof myfunction)

// Stack (Primitive), Heap (Non-Primitive) 

let myYoutubeName = "RenukaPawardotcom"


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne 

userTwo.email = "renukapawar@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
