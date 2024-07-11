const marvel_heros =["Thor","Captain America", "Ironman"]
const dc_heros=["Superman","Batman","Flash"]

//? array into array

//marvel_heros.push(dc_heros);
//console.log(marvel_heros[3]);

//! Array concatination
const newheros = marvel_heros.concat(dc_heros)
console.log(marvel_heros)
console.log(newheros)
// return a new array so m,arvel_heros remain same

//* spread method [...] for array concatination

console.log([...dc_heros,...marvel_heros])

//? array more methodology

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(1) // array into array => simple
console.log(real_another_array);

//* convertion of array

console.log(Array.isArray("parthiv"))
console.log(Array.from("Hitesh")) 
console.log(Array.from({name: "hitesh"})) // Return empty string because it can't cover either key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));