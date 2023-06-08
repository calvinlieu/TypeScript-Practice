//union types allow us to give a value a few different possible types.

let age: number | string | boolean = 21;
age = 23;
age = "24";
age = true;


type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = {
    x: 1,
    y: 34
}

coordinates = {lat: 1, long: 2}



function printAge (age: number | string) {
    console.log(`You are ${age} years old`);
   
}

printAge(23);

//type narrowing

//narrowing the type is simply doing a type check before working with a value. You may want to use a number or string if you don't know what your variables with hold.

function calculateTax(price: number | string, tax:number) {
    if (typeof price === "string") {
        price = price.replace("$", "");
        price = parseFloat(price) * tax;
    };

    return price * tax;
    
    // return price * tax;
}


//union types in arrays
const nums: number[] = [1,2,3,4];

//avoid any whenever you can
const stuff1: any[] = [true, "sakljdsa", 13];

//array that holds multiple types.
const stuff: (number | string)[] = [1, "sdsada"]; 

const coords: (Point | Loc) [] = [];


//literal types

let zero: 0 = 0;
// zero = 2. this will give a complaint since it is assigned to the value of 0.

//on its own, its not super helpful. but when you combine it, you can have fine-tuned type options.

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = "asdsad" won't work
type DayOfWeek = "Monday" | "Tues"| "Wed";

let today: DayOfWeek = "Wed";


// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean

let highScore: number | boolean = 0;

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)

let stuff2: number[] | string[] = [];


// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)

type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: "Ski" | "Snowboard";
    level: SkillLevel;
}

// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number

type RGB = {
    r: number;
    g: number;
    b: number;
}

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number

type HSL = {
    h: number;
    s: number;
    l: number;
}

// Create an array called colors that can hold a mixture of RGB and HSL color types

let colors: (HSL | RGB) [] = [];

// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format

function greet(name: string | string[]): void {
    if (typeof name === "string") {
        console.log(`Hello ${name}`)
    } else {
        for (let n of name) {
            console.log(`Hello, ${n}`)
        }
    }
}
