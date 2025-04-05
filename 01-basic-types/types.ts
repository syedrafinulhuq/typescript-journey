// - Number, String, Boolean  
// - Arrays, Tuples, Enums  
// - Any, Unknown, Void, Never 


// Number
const intnum:number = 10
console.log(10)

const floatnum:number = 3.14
console.log(floatnum);

// String

const newSTR:string = "Alice"
console.log(newSTR)

const secondSTR:string = "Wong"
console.log(secondSTR)

// Boolean
const isActive:boolean = true
const isOn:boolean = false
console.log(isActive)
console.log(isOn)

// Arrays, Tuples, Enums 

const numberArray:number[] = [1010,30,43,56,10.5,34.76]
const stringArray:string[] = ['Alice','Blake','Hezel','Mark']
console.log(numberArray);
console.log(stringArray);

// modification of array using loops

let count:number = 10
for (let i=0; i<numberArray.length; i++) {
    numberArray[i] = count;
    count = count * 2;
}
console.log(numberArray)

count = 10;
// for (const element of numberArray) {
//     numberArray[element] = count
//     count = count * 2
// }
// console.log(numberArray)



