

class Person {

    constructor(name = 'Anonymous', age = 0) {

        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Gooday Mate!  My name is ${this.name}!`;  // this is called string interpolation ( or injection)
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person {

    constructor(name, age, homeLocation) {

        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation)
        {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const student = new Student('Martin Harris', 28, 'Computer Science');
const tempStudent = new Student();
const traveler = new Traveler('Bob Marley', 35, 'Jamaica');
const me = new Person('Cam Cummings', 36);
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(student.hasMajor());
console.log(tempStudent.hasMajor());
console.log(student.getDescription());
console.log(traveler.getGreeting());




