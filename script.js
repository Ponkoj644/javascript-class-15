// (1) Array filter() // [use case: to find out of stock product from product list into an array ]

const age1 = [32, 33, 16, 17, 18, 6, 40, 55];

function isVoter(vAge) {
  return vAge >= 18;
}
const voterList = age1.filter(isVoter);
console.log(voterList);

// (2) Array find() // [Depend upon a condition find a specific item] [use case: to find out a specific product from product list using product id or product name or product code ]

const age2 = [32, 33, 16, 17, 18, 6, 40, 55];

function checkPerson(pAge) {
  return pAge > 33;
}
const person = age2.find(checkPerson);
console.log(person);

// (3)  // [ Use case : use this method we can do anything with an array item and make a new array]
const num = [32, 33, 16, 17, 18, 6, 40, 55];
function newFunction(n) {
  return n * 2;
}
const newNumber = num.map(newFunction);
console.log(newNumber);

// (4) Array reduce() // [use case: we use this array for calculate 1st and 2nd item then reserved the result and reserved result calculate with 3rd item and the process continue... ]
const num1 = [32, 33, 16, 17, 18, 6, 40, 55];
function getTotal(first, next) {
  return first + next;
}
const total = num1.reduce(getTotal);
console.log(total);

// (5) Array sort() // [Use this array we can sorting array item to alphabetically with make a new array and thus overwrite the old array]
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
