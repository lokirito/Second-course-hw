function guessNumber() {
    const rndNumber = Math.floor(Math.random() * 100) + 1;
    let guessNumber = 0;

    while (guessNumber !== rndNumber) {
        guessNumber = Number(prompt(`Угадай число от 1 до 100`));
        if (isNaN(guessNumber)) {
            alert(`Пожалуйста, введите число`);
            continue;
        }
        if (guessNumber > rndNumber) {
            alert(`Загаданное число меньше`)
        } else if (guessNumber < rndNumber) {
            alert(`Загаданное число больше`)
        } else {
            alert(`Поздравляю! Вы угадали число ${rndNumber}`)
        }
    }   
}