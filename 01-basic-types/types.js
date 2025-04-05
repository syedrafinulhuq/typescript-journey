// - Number, String, Boolean  
// - Arrays, Tuples, Enums  
// - Any, Unknown, Void, Never 
// Number
var intnum = 10;
console.log(10);
var floatnum = 3.14;
console.log(floatnum);
// String
var newSTR = "Alice";
console.log(newSTR);
var secondSTR = "Wong";
console.log(secondSTR);
// Boolean
var isActive = true;
var isOn = false;
console.log(isActive);
console.log(isOn);
// Arrays, Tuples, Enums 
var numberArray = [1010, 30, 43, 56, 10.5, 34.76];
var stringArray = ['Alice', 'Blake', 'Hezel', 'Mark'];
console.log(numberArray);
console.log(stringArray);
// modification of array using loops
var count = 10;
for (var i = 0; i < numberArray.length; i++) {
    numberArray[i] = count;
    count = count * 2;
}
console.log(numberArray);
count = 10;
// for (const element of numberArray) {
//     numberArray[element] = count
//     count = count * 2
// }
// console.log(numberArray)
