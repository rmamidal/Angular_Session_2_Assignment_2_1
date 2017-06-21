console.log("My Fat Arrow function");

/**
 * Fat Arrow Function.
 * @param {string} Name.
 * @param {number} Age.
 * @return {string} Message.
 */
let getMyDetail = (Name:string, Age:number) :string => { return "I am "+ Name + ", My age is "+ Age;}

// Calling fat arrow function and storing output string in message.
let message:string = getMyDetail("Raj", 31);

console.log(message); // Print "I am Raj, My age is 31".