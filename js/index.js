function sumDivisiblePerThreeOrFive(number) {
  if (!Number.isInteger(number) || number <= 0) {
    return alert("Por favor, insira um número inteiro positivo.");
  }

  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

function calculateSum() {
  const inputNumber = document.getElementById("inputNumber").value;
  const number = parseInt(inputNumber);

  const result = sumDivisiblePerThreeOrFive(number);

  if (result !== undefined) {
    document.getElementById("result").innerText = "O resultado é: " + result;
  } else {
    document.getElementById("result").style.display = "none";
  }
}

// Exemplos
console.log(sumDivisiblePerThreeOrFive(10));
console.log(sumDivisiblePerThreeOrFive(11));
console.log(sumDivisiblePerThreeOrFive(25));
