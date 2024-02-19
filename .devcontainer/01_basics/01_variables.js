const accountId     = 121456
let accountEmail    = "renukapawar@gmail.com"
var accountPassword = "Renuka12345"
accountCity         = "Dhule"   // variable can be declared directly also
let accountState        // if a variable is declared but value is not assigned it's value is undefined

/*
Prefer not to use var because of issue in block scope and functional scope
*/ 

console.log(accountEmail);
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState] )