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

type Point = {
    x: number;
    y: number;
}

let coordinate: Point = { x: 34, y: 15 };

function randomCoord(): Point {
  return { x: Math.random(), y: Math.random() };
}

type Song = {
    title:"Unchained",
    artist: "Righteous",
    numStreams: 1231321,
    credits: {
        producer: "phil",
        writer: "Alex"
        }
}

function calculatePayout(song: Song): number {
    return song.numStreams * .0033
}

function printSong(song:Song): void {
    console.log(`${song.title} - ${song.artist}`)
}


const mySong: Song = {
    title:"Unchained",
    artist: "Righteous",
    numStreams: 1231321,
    credits: {
        producer: "phil",
        writer: "Alex"
    }
}

calculatePayout(mySong);
printSong(mySong);

