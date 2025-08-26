let password = 'пароль';
let userPassword = prompt('Введите пароль');
if (userPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неверно');
}

let c = 2;
if (c >= 0 && c <= 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

let d = 120;
let e = 80;
if (c >= 100 || d >= 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = 12;
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;
    default:
        alert('Неверно');
        break;
}