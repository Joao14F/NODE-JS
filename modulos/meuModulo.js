const readline = require('readline');
const { somar, subtrair, multiplicar, dividir } = require('./operacoes');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    rl.question('Digite a operação desejada (+, -, * ou /): ', (operacao) => {
      let resultado;
      switch (operacao) {
        case '+':
          resultado = somar(parseFloat(num1), parseFloat(num2));
          break;
        case '-':
          resultado = subtrair(parseFloat(num1), parseFloat(num2));
          break;
        case '*':
          resultado = multiplicar(parseFloat(num1), parseFloat(num2));
          break;
        case '/':
          resultado = dividir(parseFloat(num1), parseFloat(num2));
          break;
        default:
          console.log('Operação inválida');
          process.exit(0);
      }
      console.log(`O resultado da operação é: ${resultado}`);
      rl.close();
    });
  });
});
