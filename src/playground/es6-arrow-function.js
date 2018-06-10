

// comparing types of functions

const square = function(x) {
    return x*x;
};

const squareArrow = (x) => {
    return x*x;
}

const multiplyArrow = (x,y) => x * y;


console.log(square(7));
console.log(squareArrow(9));

const getFirstName = (name) => {
    return name.split(' ')[0];
}

console.log(getFirstName('Cameron Cummings'));

const getLastName = (name) => name.split(' ')[name.split(' ').length -1];

console.log(getLastName('Cameron Cummings'));
