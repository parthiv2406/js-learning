const User={
    name:"Parthiv",
    email:"some@gmail.com",
    isLoggedIn:true,
}
const user2={
    teacher:"Parto",
    emailID:"somewww@gmail.com",
   // isLoggedIn:false,
}

// concat two object
//? when we concate object key must be differnt otherwise print only 1 
const user3= Object.assign({},user2,User)
console.log(user3)

//* using spread method

const us4= {...User,...user2}
console.log(us4)



//? we can print all keys or values and store as array
// console.log(Object.keys(user2))
// console.log(Object.values(User))
// console.log(Object.entries(User))
console.log(User.hasOwnProperty("email"))



//! take object as array elemnets
const moreUser=[
    {
        name:"abc",
        id:123
    },
    {
        name:"god",
        id:999
    },
    {
        name:"GOAT",
        id:10
    }
]
console.log(moreUser[0].id)


//* objectdestructure to avoid repeated object.key we use that method

const {email} = User
console.log(email)


//? json format json==> jhavascript object notation

//* api call and return json format object

// example of json
    '{"name":"John", "age":30, "car":null}'
