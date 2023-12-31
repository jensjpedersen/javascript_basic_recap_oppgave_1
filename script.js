



//? Svaret på hver av oppgavene skal konsoll logges

//* Assignment 1: Logging to the Console
//

//! log into the console: Hello world!
console.log("Hello World!");
//* Assignment 2: Variables
// Let defines a variable that can be changed later.
let x = 10;

// Const defines a variable that cannot be changed later.
const y = 5;

/* Creating a variable to shorten code The 2 variables above.
Output should be: "Resultatet er: 15" (hvor 15 er summen av variablene) */

const z = x + y;
console.log(`Resultatet er: ${z}`);

//* Assignment 3:
// Use double operators to solve the parts below:
let number = 5; 

// Incrementing a number by 1.
number++; 
console.log(number); 

// Decrementing a number by 1.
number--; 
console.log(number);

// Multiplying a number by itself.
number*=number
console.log(number);

// Dividing a number by itself.

number/=number
console.log(number);

//* Assignment 4:
/* Make an if else statement that returns a random string */


const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function recurseRandomString(strLength) {
    // Return a random string with length = strLength

    const randomInt = Math.floor(Math.random()*characters.length); 

    if ( strLength <= 1) {
        return characters[randomInt]; 
    } else {
        return recurseRandomString(strLength-1) + characters[randomInt]; 
    }
}

console.log(recurseRandomString(8))

//* Assignment 5:
/* Make a function that uses a parameter to check if a number is odd or even */
let printOddOrEven = number => ( number % 2 === 0 ) ? console.log(`${number} is even`) : console.log(`${number} is odd`)
printOddOrEven(5)
printOddOrEven(6)

//* Assigment 6:
/* Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:
const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working. */


function printTitle(userMale) {
    let userTitle; 
    ( userMale === true ) ? userTitle="Mr." : userTitle="Mrs."
    console.log(`userMale = ${userMale} and userTitle = ${userTitle}`);
}

let userMale = true; 
printTitle(userMale)

userMale = false; 
printTitle(userMale)


//* Assigment 8:
/*
Write a function that takes in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Good night (name received)" if the hour received is 0-6
"Good morning (name received)" if the hour received is 6-12
"Good day (name received)" if the hour received is 12-18
"Good evening (name received)" if the hour received is 18-24
"Invalid time" if the hour received is greater than 24

Use whichever function syntax you want.
Use template literal in your return: `This is a template literal ${variable}`

Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
Console log the function a few times to show that it's working. */

//! Write code here

function yourFunction(name, hour) {

    console.assert(typeof(hour) === "number"); // check if number

    if ( 0 <= hour && 6 > hour ) {
        console.log(`Good night ${name}`);
    } else if ( 6 <= hour && 12 > hour ) {
        console.log(`Good morning ${name}`);
    } else if ( 12 <= hour && 18 > hour ) {
        console.log(`Good day ${name}`);
    } else if ( 18 <= hour && 24 >= hour ) {
        console.log(`Good evening ${name}`);
    } else if ( hour > 24 ){
        console.log("Invalid time"); 
    } else {
        // negative numbers 
        console.log("Invalid time"); 
    }
}

for (let i = -1; i <= 25; i++) {
    yourFunction('jens', i)
}


//* Assignment 9:
/* Write a function that takes in 2 numbers as parameters.

In your function, check which of the numbers received is the largest,
then return the sum of the largest number divided by the smaller.

Use arrow function syntax.

Example: your function receives 13 and 24, it should return the sum of 24/13 */

let devideByMin = (num1, num2) => Math.max(num1, num2) / Math.min(num1, num2)
console.log(devideByMin(5, 10))



//* Assignment 10:
/* Make a function that uses Switch/Case or if/else,
Random Number Generator, Methods, and Arrays with Objects */

//! Write code here


personArray = [
    { name: 'Jens', age: 28 }, 
    { name: 'Ole', age: 28}
]

function getRandomPersonInfo() {

    let validEntries = ['name', 'age', 'reverse']; 
    let randomEntryIndex = Math.floor(Math.random() * validEntries.length); 
    let entry = validEntries[randomEntryIndex]; 
    let randomPersonIndex = Math.floor(Math.random() * personArray.length); 
    let person = personArray[randomPersonIndex]; 

    switch (entry) {
        case 'name':
            console.log(`${person.name}'s name is ${person.name}`);
            break
        case 'age':
            console.log(`${person.name}'s age is ${person.age}`);
            break
        case 'reverse': 
            console.log(`${person.name}'s in reverse is ${person.name.split("").reverse().join("").toUpperCase()}`);
            break
        default: 
            console.log('Not a valid entnry'); 
    }
}

getRandomPersonInfo()

//* BAONUS assignment:
//

/*
EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make a function called coolMaker that takes in 1 parameter.

If the parameter received is a string:
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received is false,
return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

Use arrow function syntax.

Console log the function call with a few different datatypes to show that it's working
*/

let coolMaker = (param) => 
    typeof param === 'string' ? `😎${param}😎`
        : typeof param === 'number' ? `😎${param * 2}😎`
        : typeof param === 'boolean' ? ( param ? '😎Yeah😎' : '😎Chill😎' )
        : "😎Primitive values only😎"

console.log(coolMaker('hei'))
console.log(coolMaker(654.6))
console.log(coolMaker(true))
console.log(coolMaker(false))


