function square(num) {
    return num * num;
}
square(3);
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there, ".concat(person);
}
var doSomething = function (person, age, isFunny) {
};
doSomething("Chicken", 76, true);
var addNums = function (x, y) {
    return x + y;
};
//union
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
var add = function (x, y) {
    return x + y;
};
//anonymous functions
var colors = ["red", "orange", "yellow"];
colors.map(function (color) {
});
//typescript can infer the type.
function blah(color) {
    return color.toUpperCase();
}
//void type: return type that don't return anything. void of any data.
function printTwice(msg) {
    console.log(msg);
}
//never type: values that never occur. annotate a function that always throws an exception or a function that never finishes executing.
//void returns undefined or null. //never doesn't return anything.
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("GAME LOOP RUNNING!");
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
var twoFer = function (name) {
    if (name === void 0) { name = "you"; }
    return "One for ".concat(name, ", one for me");
};
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
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};
