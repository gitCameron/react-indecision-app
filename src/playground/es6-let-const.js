var nameVar = 'Jordan';
var nameVar = 'Mike';

console.log('nameVar', nameVar);

let nameLet = 'Jet';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping example
// var based variables are function scoped
// let and const are block scoped meaning between curly braces

var fullName = 'Cameron Cummings';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);