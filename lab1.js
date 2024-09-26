/*
 Ian McDonald
 101419262
 COMP3123 Lab 1
*/

// Exercise 1: Write a JavaScript program to capitalize the first letter of each word of a given string.

function capitalizeFirstLetter(str) {
    var strArr = str.split(" ");
    var newStr = "";
    for (var i = 0; i < strArr.length; i++) {
        newStr += strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1) + " ";
    }
    return newStr;
}

console.log(capitalizeFirstLetter("the quick brown fox"));

// Exercise 2: Write a JavaScript program to find the largest of three given integers.

function fundLargestInt(a, b, c) {
    var largest = a;
    if (b > largest) {
        largest = b;
    }
    if (c > largest) {
        largest = c;
    }
    return largest;
}

console.log(fundLargestInt(1, 0, 1));

console.log(fundLargestInt(0, -10, -20));

console.log(fundLargestInt(1000, 510, 440));

// Exercise 3: Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.

function moveLastThree(str) {
    if (str.length >= 3) {
        var lastThree = str.substring(str.length - 3);
        var newStr = lastThree + str.substring(0, str.length - 3);
        return newStr;
    }
    return str;
}

console.log(moveLastThree("Python"));

console.log(moveLastThree("JavaScript"));

console.log(moveLastThree("Hi"));

// Exercise 4: Write a JavaScript program to find the types of a given angle.

function findAngleType(angle) {
    if (angle < 90) {
        return "Acute angle";
    }
    if (angle === 90) {
        return "Right angle";
    }
    if (angle < 180) {
        return "Obtuse angle";
    }
    return "Straight angle";
}

console.log(findAngleType(47))

console.log(findAngleType(90))

console.log(findAngleType(145))

console.log(findAngleType(180))
