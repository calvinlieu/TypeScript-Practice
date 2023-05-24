


function square(num: number): number {
    return num * num;
}

square(3);

function greet(person: string= "stranger") {
    return `Hi there, ${person}`
}

const doSomething = (person: string, age: number, isFunny:boolean) => {

}

doSomething("Chicken", 76, true);


const addNums = (x:number, y:number): number => {
    return x + y;
}

//union
function rando(num: number) {
    if (Math.random() < 0.5) {
        return num.toString()
    }
    return num;
}


const add = (x: number, y:number):number => {
    return x + y;
}

//anonymous functions

const colors = ["red", "orange", "yellow"];

colors.map(color => {

})

//typescript can infer the type.
function blah(color) {
    return color.toUpperCase();
}

//void type: return type that don't return anything. void of any data.

function printTwice(msg:string):void {
    console.log(msg);
}


//never type: values that never occur. annotate a function that always throws an exception or a function that never finishes executing.

//void returns undefined or null. //never doesn't return anything.

function makeError(msg: string): never {
    throw new Error(msg);
}


function gameLoop(): never {
    while(true) {
        console.log("GAME LOOP RUNNING!")
    }
}

// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

const twoFer = (name: string = "you"):string => {
    return `One for ${name}, one for me`
}

console.log(twoFer());
console.log(twoFer("Elton"));
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

const isLeapYear = (year: number):boolean =>{
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) 
    
}