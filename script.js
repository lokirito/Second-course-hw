// Задание 1

const massiv = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < massiv.length; i++) {
    console.log(massiv[i]);
    if (massiv [i] === 10) break;
    }

// Задание 2

const mass = [1, 5, 4, 10, 0, 3];
mass.forEach ((el,index) => {
    if (el === 4) {
        console.log(`Индекс 4 равен ${index}`);
    }
});

// Задание 3

const m = [1, 3, 5, 10, 20];
let joinedM = m.join('');
console.log(joinedM);

// Задание 4

const arr = [];
for (let i = 0; i < 3; i++) {
    const arr2 = [];
    for (let i = 0; i < 3; i++) {
        arr2.push(1);
    }
    arr.push(arr2);
}
console.log(arr);

// Задание 5

const mas = [1, 1, 1];
mas.push(2, 2, 2);
console.log(mas);

// Задание 6

const array = [9, 8, 7, 'a', 6, 5];
array.sort();
console.log(array);
const filterArray = array.filter(el => el !== 'a');
console.log(filterArray);

// Задание 7

const numbers = [9, 8, 7, 6, 5];

const userNumber = +prompt(`Угадай число из массива`);
if (numbers.includes(userNumber)) {
    alert(`Угадал`);
} else {
    alert(`Не угадал`);
}

// Задание 8

let text = 'abcdef';
text = text.split('');
console.log(text);
text.reverse();
text = text.join('');
console.log(text);


// Задание 9

const massivTwo = [[1, 2, 3],[4, 5, 6]];
const massivNew = []

for (let i = 0; i < massivTwo.length; i++) {
    massivNew.push(...massivTwo[i]);
}
console.log(massivNew);

// Задание 10

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < number.length; i++) {
    if (number[i + 1]) {
        console.log(number[i] + number[i + 1]);
    }
}

// Задание 11

function square(arr) {
    return arr.map(item => item ** 2);
}

console.log(square([1, 2, 3]));

// Задание 12

function getLength(arr) {
    return arr.map(item => item.length);
}

console.log(getLength([`hello`, `word`]));

// Задание 13

function negativeNumbers(array) {
    return array.filter(item => item < 0);
}

console.log(negativeNumbers([1 ,3, 7, -6, 9, -14, 2, -7]));

// Задание 14

function randomNumb() {
    return Math.floor(Math.random() * 10)
}
const arraw = [];

for (let i = 0; i < 10; i++) {
    arraw.push(randomNumb())
}

console.log(arraw);

const evenArraw = [];

for (let i = 0; i < arraw.length; i++) {
    if (arraw[i] % 2 === 0) {
        evenArraw.push(arraw[i])
    }
}

console.log(evenArraw);

// Задание 15

function randomNumber() {
    return Math.floor(Math.random() * 10)
}
const arrr = [];

for (let i = 0; i < 4; i++) {
    arrr.push(randomNumber());
}

console.log(arrr);
console.log(arrr.reduce((a, b) => a + b) / arrr.length);