// Funció per generar un número random entre 1 i 6.
function randomNumberDice6() {
  return Math.floor(Math.random() * 6) + 1;
}

// Funció que retorna un Array de 'n' elements que siguim números ràndom entre 1 i 6.
function getTirades(n) {
  return [...Array(n)].map(randomNumberDice6);
}

// Funció per sumar els números d'un Array
function sumNumbersInArray(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

export {randomNumberDice6, getTirades, sumNumbersInArray};
