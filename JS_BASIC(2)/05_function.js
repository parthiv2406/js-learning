// example of a function with function parameter, definition and calling
function Sum(n1,n2){
    return n1+n2
}
//console.log(Sum(5,4))

 //? create a function and print just logged in message

function logUserMessage(username){
    if(!username){
        return `please input username`
    }
    return `${username}just logged in`
}
//console.log(logUserMessage("messi"))

// ! rest opeartor(...) and calculate cart price return all value as array

function calculateCartPrice(...num1){
   
  let sum =0;
  for(let i of num1){
    sum+=i;
  }
    return `Total cart value ${sum}`
}
//console.log(calculateCartPrice(500,300, 250,670))


//* passing object through a function

const User ={
    name: "Hulk",
    character:"marvel"
 }
 function myObject(anyobject){
    console.log( `username is ${anyobject.name},  Character is ${anyobject.character}`)
 }
 myObject(User)

 //? passing array
const myHeroes=["IronMan", "hulk","Thor"]
 function myArr(arr){
    console.log(`3rd character of the array is ${arr[2]}`)
 }
 myArr(myHeroes)

