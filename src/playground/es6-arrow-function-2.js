
// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(add(55, 1));

// this keyword - no longer bound with arrow functions

const user = {
    name: 'Andrew',
    cities: ['New York City', 'Miami', 'Denver'],
    printPlacesLived: function () {
        
        // map allows you to transform each item and can be assigned to another array/variable
        const newCities = this.cities.map((city) => this.name + ' has lived in ' + city);

        // forEach allows you to do something with each item (e.g. print to screen)
        // this.Cities.forEach((city) => {
        //     console.log(this.Name + ' has lived in ' + city);
        // });

        return newCities;
    }
};

console.log(user.printPlacesLived());

const multiplier = {

    numbers: [5, 6, 7, 8],
    multiplyBy: 3,
    multiply() {
        const values = this.numbers.map((number) => this.multiplyBy * number);

        return values;
    }
}

console.log(multiplier.multiply());