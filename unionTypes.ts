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



