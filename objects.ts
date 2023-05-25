// const dog = {
//   name: "Elton",
//   breed: "Corgi",
//   age: 0.5,
// };

// function printName(person: { first: string; last: string }): void {
//   console.log(`${person.first} ${person.last}`);
// }

// printName({ first: "Thomas", last: "Bob" });

// //object literal
// let coordinate: { x: number; y: number } = { x: 34, y: 15 };

// function randomCoord(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// //TS will complain when we assign object literals in line.
// printName({first: "Mick", last: "Jagger", age: 42})

// //define in a separate variable
// const singer = {first: "Mick", last: "Jagger", age: 42, isAlive: true}

// printName(singer);


//type aliases

// type Point = {
//     x: number;
//     y: number;
// }

// let coordinate: Point = { x: 34, y: 15 };

// function randomCoord(): Point {
//   return { x: Math.random(), y: Math.random() };
// }

// type Song = {
//     title:"Unchained",
//     artist: "Righteous",
//     numStreams: 1231321,
//     credits: {
//         producer: "phil",
//         writer: "Alex"
//         }
// }

// function calculatePayout(song: Song): number {
//     return song.numStreams * .0033
// }

// function printSong(song:Song): void {
//     console.log(`${song.title} - ${song.artist}`)
// }


// const mySong: Song = {
//     title:"Unchained",
//     artist: "Righteous",
//     numStreams: 1231321,
//     credits: {
//         producer: "phil",
//         writer: "Alex"
//     }
// }

// calculatePayout(mySong);
// printSong(mySong);



//optional properties. use a question mark for optional properties.
type Point = {
    x: number;
    y: number;
    z?: number;
}

const myPoint: Point = {x: 1, y: 3, z:1 }


//readonly modifier
type User = {
    readonly id: number;
    username: string;
}

const user: User = {
    id: 1232,
    username: "catgirl"
}

//intersection types
type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
}

type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

type CatDog = Cat & Dog & {
    age: number;
}

const christy: CatDog = {
    numLives: 7,
    breed: "Corgi",
    age: 5
}


// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly

type Movie = {
    readonly title: string;
    originalTitle?: string;
    director: string;
    releaseYear: number;
    boxOffice : {
        budget: number;
        grossUS: number;
        grossWorldwide: number;
    }

}
const dune: Movie = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
      budget: 165000000,
      grossUS: 108327830,
      grossWorldwide: 400671789,
    },
  };
  
  const cats: Movie = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
      budget: 95000000,
      grossUS: 27166770,
      grossWorldwide: 73833348,
    },
  };
  
  // Write a function called getProfit that accepts a single Movie object
  // It should return the movie's worldwide gross minus its budget
  
  // For example...
  // getProfit(cats) => -21166652
  
// const getProfit(movie: Movie): number => {
//     return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
// }

function getProfit(movie: Movie): number {
    const {grossWorldwide, budget} = movie.boxOffice;
    return grossWorldwide - budget;
}

// function getProfit({boxOffice: {grossWorldwide, budget}}: Movie) ;number {
//     return grossWorldwide - budget;
// }