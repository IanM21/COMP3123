var prompt = require('prompt-sync')({sigint: true});

/*
console.log("Hello World");

var name = prompt('What is your name: ');
console.log('Hello ', name); 

var x = 10;
let y = 12;
var z = x + y;

console.log(z);
console.log(y - x);
console.log(x * y);
console.log(x / y);
console.log(Math.pow(10, 3));

var m = prompt('Enter your mark: ');
m = parseInt(m);
switch(m) {
    case 75:
        console.log('Very Good');
        break;
    case 50:
        console.log('Passed');
        break;
    default:
        console.log('Invalid number');
}


if (m >= 0 && m <= 100) {
    if (m >= 75) {
        console.log('Very Good');
    } else if (m >= 50) {
        console.log('Passed');
    } else {
        console.log('Failed');
    }
} else {
    console.log('Invalid mark');
}


for (var i = 1; i <= 5; i++) {
    console.log("i: ", i);
}

var j = 5
while (j > 0) {
    if (j == 3) {
        break;
    }
    console.log("j: ", j);
    j--;
}

var cars = ["BMW", "Honda", "Ford"];
console.log(cars);
for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

function func1() {
    console.log("Function 1");
}
func1();

function func2() {
    return "Function 2";
}

var f2 = func2();
console.log(f2);

function func3(a, b) {
    return a + b;
}
console.log(func3(10, 20));

var name = "Ian M";
console.log(name.length);
for (var i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
}
*/

var str = "How are you doing?";
var strArr = str.split(" ");
/*
for (var i = 0; i < strArr.length; i++) {
    console.log(strArr[i]);
}

var part1 = str.substring(4);
console.log(part1);

var part11 = str.substr(4, 3);
console.log(part11);
*/

var str2 = str.toUpperCase();
console.log(str2);

var str3 = str.toLowerCase();
console.log(str3);