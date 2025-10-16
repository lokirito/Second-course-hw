// Задание 1

let maxNumber = (a, b) => {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return console.log(`Значения равны`);
    }
}

console.log(maxNumber(8, 4));
console.log(maxNumber(36, 54));
maxNumber(6, 6);

// Задание 2

let parity = number => {
    if (number % 2 === 0) {
        console.log(`Число четное`);
    } else {
        console.log(`Число нечетное`);
    }
}

parity(6);
parity(13);

// Задание 3

function outputSquare(digit) {
    let result = digit ** 2;
    console.log(`Квадрат числа ${digit} равен ${result}`);
}

outputSquare(7);

let returnSquare = numeral => numeral ** 2;

console.log(returnSquare(4));

// Задание 4

function helloMessage(userAnswer) {
    let hello = prompt(userAnswer);
    if (hello >= 0 && hello <= 12) {
        console.log(`Привет, друг!`);
    } else if (hello > 13) {
        console.log(`Добро пожаловать!`);
    } else {
        console.log(`Вы ввели неправильное значение`);
    }
}

helloMessage (`Сколько вам лет?`);

// Задание 5

let isN = (first, second) => 
    (isNaN(first) || isNaN(second)) 
    ? (console.log(`Одно или оба значения не являются числом`), undefined)
    : first * second;

console.log(isN (5, 7));
console.log(isN (`ва`, 7));
console.log(isN (`dg`, `ымы`));

// Задание 6

function parityNumber(question) {
    let n = Number(prompt(question));
    if (n = isNaN) {
        console.log(`Переданный параметр не является числом`);
    } else {
        final = n ** 2;
        console.log(`${n} в кубе равняется ${final}`);
    }
}

parityNumber (`Введите любое число`);

// Задание 7

function getRectangleArea() {
    return this.radius ** 2 * 3.14;
}

function getRectanglePerimeter() {
    return this.radius * 2 * 3.14;
}

const circle1 = {
    radius: 4,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
}

const circle2 = {
    radius: 7,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());