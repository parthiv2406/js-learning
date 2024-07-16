
//! Array declare  and valur identify

const myArray = new Array(5,6,7,8,3)
console.log(myArray[3])
const myARR=[5,6,9,"Parthiv",true]
console.log(myARR[3])

//* Array method

myARR.push("das Mandal")
console.log(myARR)
myARR.pop()
console.log(myARR)
console.log(myArray.includes(8))

// shift unshift
myARR.shift() //! value will shift from begining
console.log(myARR)
myARR.unshift("Good boy") //? insert at begin
console.log(myARR)

// ? join opeartor--> convert the array into string 

const myARR2=myARR.join()
console.log(myARR)
console.log(myARR2)
console.log(typeof myARR) // object
console.log(typeof myARR2) // string


// slice and splice method
//* slice ==> diveded array but original array does not change ,, end range not included
//? Splice ==> original array change

const newArr =[10,20,30,40,50]
console.log("slice method",newArr.slice(2,4))
console.log("A " ,newArr) // orginal array same

console.log("splice method ",newArr.splice(2,4))
console.log("B ",newArr) //?Remaining array print change original array


