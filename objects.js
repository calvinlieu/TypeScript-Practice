// const dog = {
//   name: "Elton",
//   breed: "Corgi",
//   age: 0.5,
// };
var coordinate = { x: 34, y: 15 };
function randomCoord() {
    return { x: Math.random(), y: Math.random() };
}
function calculatePayout(song) {
    return song.numStreams * .0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained",
    artist: "Righteous",
    numStreams: 1231321,
    credits: {
        producer: "phil",
        writer: "Alex"
    }
};
calculatePayout(mySong);
printSong(mySong);
