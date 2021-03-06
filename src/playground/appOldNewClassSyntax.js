// external packages: install -> import -> use

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from '../components/IndecisionApp';


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting() {
        return `Hi. My name is ${this.name}.`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(oldSyntax);
console.log(getGreeting());

// -----------------------------------------

class NewSyntax {
    name = 'Amber';

    getGreeting = () => {
        return `Hi. My name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newSyntax);
console.log(newGetGreeting())
