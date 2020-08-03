let input = prompt('How many people are coming to your wedding?');

// Your code here

function getTotal(prompt) {
   let people = parseInt(prompt);
   if(people <= 50) {
       return 4000
   }
   else if(people > 50 && people <= 100) {
        return 10000
   }
    else if(people > 100 && people <= 200) {
        return 15000
   }
    else if(people > 200) {
        return 20000
   }
}

let price = getTotal(input);

console.log('Your wedding will cost '+price+' dollars');