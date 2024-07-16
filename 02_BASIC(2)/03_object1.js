const mySym= Symbol("key1")
const myuser={
    "name":"Parthiv",
    email:"parthivdasmandal@gmail.com",
    age:21,
    isLoggedIn:true,
   [mySym]:"mykey1"
    


}
// ! search any key and value from object using (.) method
console.log(myuser.name)
//* another way is "[]" method mention key data type
// to using symbol we use [] method
console.log(myuser["email"])


//? object symbol syntax
// symbol print as a string
console.log(myuser.mySym)
console.log(typeof myuser.mySym)
console.log(myuser)

//! symbol print as a symbol
console.log(myuser[mySym])
console.log(typeof [mySym])
console.log(myuser)
