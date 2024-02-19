const name = "renuka"
const repoCount = 50 

console.log(name + repoCount)            //renuka50
console.log(name + repoCount + " Value") //renuka50 Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)   //Hello my name is renuka and my repo count is 50

const gameName = new String('renuka-hc')
console.log(gameName[0])            //r
console.log(gameName.__proto__);    // {}
console.log(gameName.length)        // 9
console.log(gameName.toLowerCase()) //renukahc   
console.log(gameName.toUpperCase()) //RENUKAHC
console.log(gameName.charAt(2))     // n
console.log(gameName.indexOf('n'))  // 2

const newString = gameName.substring(1, 4) // last value is not included-- (start point, end point), can not give minus value in substring, even if given it will consider from zero
console.log(newString)              // enu

const anotherString = gameName.slice(-7, 4) // minus is counted in reverse direction
console.log(anotherString)

const newStringOne = "    Renuka    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://renuka.com/renuka%20pawar"    

url.replace('%20', "-")
console.log(url.replace('%20', "-"));     // https://renuka.com/renuka-pawar
console.log(url.includes('renuka'))       // true
console.log(url.includes('football'))     // false
console.log(gameName.split('-'))