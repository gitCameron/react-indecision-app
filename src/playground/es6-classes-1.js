

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
        let description = `${super.getDescription()}  The student's major is ${this.major}.`;
        return description;
    }
}

const student = new Student('Marting Harris', 28, 'Computer Science');
const tempStudent = new Student();
const me = new Person('Cam Cummings', 36);
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(student.hasMajor());
console.log(tempStudent.hasMajor());
console.log(student.getDescription());




