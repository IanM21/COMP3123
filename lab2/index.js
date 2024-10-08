/*
Ian McDonald
101419262
Lab 2
*/

// Exercise 1:
const greeter = (myArray, counter) => {
    const greetText = 'Hello';

    for (let index = 0; index < myArray.length; index++) {
        console.log(`${greetText} ${myArray[index]}`);
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Exercise 2:
const capitalize = (string) => {
    const [first, ...rest] = string;
    return first.toUpperCase() + rest.join('');
}
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

// Exercise 3:
const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(color => capitalize(color));
console.log(capitalizedColors);

// Exercise 4:
const values = [1, 60, 34, 30, 20, 5];
const filterLessThanTwenty = values.filter(value => value >= 20);
console.log(filterLessThanTwenty);

// Exercise 5:
const array = [1, 2, 3, 4];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
const product = array.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(sum);
console.log(product);

// Exercise 6:
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
