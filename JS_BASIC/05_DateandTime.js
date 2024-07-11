const mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleString())


//! create any random date

const createDate= new Date(2023,2,25,5,30)
console.log(createDate.toLocaleString())


//* calculate time and compare with random dates

let calcuTime = console.log(Date.now())        // to get sec
 calcuTime = console.log(Math.floor(Date.now()/1000))


console.log(createDate.getTime())


// compare curren time with random time

let flag=false;
if(createDate.getTime()<=Date.now()){
    flag = true;
}
console.log(flag)

