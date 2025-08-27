 for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

let a = 1;
do {
    console.log(a);
    a++;
} while(a <= 5);

let b = 7;
while (b <= 22) {
    console.log(b);
    b++;
}

const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}
for (let key in obj) {
    console.log(`Имя сотрудника ${key} зарплата ${obj[key]} долларов`);
}

let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
}
console.log(`Количество циклов: ${num}`);

let dayFriday = 1;
let allDay = 31;
for (let i = dayFriday; i <= allDay; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчёт.`);
}