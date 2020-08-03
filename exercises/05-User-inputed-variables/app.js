var age = prompt('What is your age?');

// Your code below:

let addTenYears = function(age) {
   return parseInt(age) + 10;
}

let newAge = addTenYears(age);

console.log(newAge)