// ? IIEF => imeediately invoked function
// Encapsulating code: IIFEs can help you write more modular and maintainable JavaScript applications.
//* Avoiding global scope pollution: IIFEs keep variables and functions within their own scope, preventing them from unintentionally affecting other parts of the code.
// Providing data privacy: IIFEs can allow public access to methods while keeping variables defined within the function private.

( function(){
    console.log(`my age is 21`)
})();


((name ,age)=>{
    console.log(`my name is :${name} my age  is ${age}`)
})("parthiv",21);