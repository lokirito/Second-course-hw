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


function generateMathProblem() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operations = ['+', '-', '*', '/'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const question = `${num1} ${operation} ${num2}`;

  let answer;
  switch (operation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    case '/':
      answer = (num1 / num2).toFixed(2);
      break;
  }

  const userAnswer = prompt(`Решите: ${question}`);

  if (userAnswer !== null) {
    if (userAnswer.trim() === String(answer)) {
      alert("Правильно!");
    } else {
      alert(`Ошибка`);
    }
  }
}