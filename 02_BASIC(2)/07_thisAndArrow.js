// this and arrow function
//? "this" contain current context of any object
const user={
    username: "Parthiv",
    price: 399,
    welcomeMessage:function(){
        console.log(`Hi ${this.username} welcome to coding journey`)
        console.log(this)
    },
    
}
user.welcomeMessage()
user.username= "Hulk"
user.welcomeMessage()
console.log(this) //! globally here is no context so it return empty string in node environment 
//! differnt return in browser ==> window


function user2(){
    username:"Parthiv"
    // console.log(this.username)
    // console.log(this)
}
user2()


//! discuss about fat arrow function syntax ()=>{}

//? type of function declaration 
 function myName(num1,num2){
    return num1+num2

 }
 console.log(myName(4,5))
 // 2..
 const myAge = function(n1,n2){
    return n1*n2
 }
 console.log(myAge(4,2))
 //3... It is known as fat arrow function
 const myProfile = ()=>{

 }

 // * differnt representaion of fat arrow function

 const chai=(num1 , num2)=>(num1+num2)
 console.log(chai(40,90));
 //? when we write() no need to write return but 

const p1=()=>({name:"ram"})
console.log(p1())

 