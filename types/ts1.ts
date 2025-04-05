// Strings
const myString:string = "name"
myString.toUpperCase()
myString.toLowerCase()

// locale - region specific

const toLowerLocaleCase = myString.toLocaleLowerCase('tr-TR')
const toUpperLocaleCase = myString.toLocaleUpperCase('tr-TR')

console.log(toLowerLocaleCase)
console.log(toUpperLocaleCase)
console.log(myString)