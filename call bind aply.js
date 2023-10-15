

///   call   ..//


// let obj ={
//     name: "Rakesh kumar"
// };

// function sayHELLO(age) {
//     console.log(`hello my name is ${this.name} and i am ${age} year old`);

// }

// console.log(sayHELLO.call(obj,25));


/////  Aply...////// 
//.. just put arguement in square brackets   ...//


//  let obj ={
//      name: "Rakesh kumar"
//  };

// function sayHELLO(age,profession) {
//     console.log(`hello my name is ${this.name} and i am ${age} year old and my proffesion is ${profession}`);

//  }

//  console.log(sayHELLO.apply(obj,[25, "software engineering"]));


///...   Bind  .... ////
//...   bind return a reuseable array  ...//

// let obj = {
//     name: "Rakesh kumar"
// }
// function sayHELLO(age, profession) {
//     console.log(`hello my name is ${this.name} and i am ${age} year old and my proffesion is ${profession}`);

//     const BindFUNC = sayHELLO.bind(obj)
//     console.log(BindFUNC(30, "software engineering"))
// }