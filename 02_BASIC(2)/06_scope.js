
// global and local scope of a variable and problem of var
var value =300
let a =90
if(true){
    //? here only a = 300 globally it is 90
    let a  =300;
    var value =50;
}
// console.log(value)
// console.log(a)

// nested function scope explained
//? scope of function (nested) => parent varaible can access by child but opposite is not possible

function parent(){
    let userName = "Anup"
    function child(){
        let Name = "Parthiv"
        console.log(userName)
    }
    //console.log(Name) //* error show because its varible of child we can't access by parent
    child()
}
parent()

//! function calling and hold into variable problem
add2() // ? before function definition we can call here
function add2(){
    const name= "Parthiv"
    const hobby =" cricket"
    console.log(name + hobby)
}
add2()

//* but in case of when we hold the value of function it show error 
//game()  //?cannot acess befor intilization here game is function name
let game = function(){
    console.log( `cricket and football`)
}
game()