//string array
const activeUsers: string[] = ["colt"];

activeUsers.push("sklajdksa");


//number array
const ageList: number[] = [56, 24, 1];
ageList[0] = 99;

//cannot assign a string to a number array.

//any array

const anyArray = [];


//alternate array syntax

const bools: Array<boolean> = [];


type Point = {
    x: number,
    y: number
}

const coords: Point[] = [];
coords.push({x: 23, y: 8})

//multidimensional arrays
//you would add on an extra array after the type declaration.
const board: string[][] = [["sadsa"], ["sdadsada"]];

// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
    name: string,
    price: number,
}

const prod: Product[] = [];
prod.push({name: "coffee mug", price: 11.50})

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

const getTotal = (products:Product[]): number => {
    let total = 0;
    for (let product of products) {
        total += product.price;
    }

    return total;
}