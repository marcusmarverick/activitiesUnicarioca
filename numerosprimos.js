// Função para verificar se um número e primo

#id="numerosprimos"

function isPrime(num) {
    if (num <= 1) return false; // Os números menores ou iguais a 1 nâo são primos
    if (num <= 3) return true; // Os numeros 2 e 3 são números primos
    if (num % 2 === 0 || num % 3 === 0) return false; // Exclui os numeros multiplos de 2 e 3
    for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
    }
    // Função para receber a entrada do usuario
    function checkPrime() {
    let input = prompt("Por favor, digite um número para saber se é primo ou não!");
    let num = parseInt(input);
    if (isNaN(num)) {
    console.log("Por favor, digite um número para saber se é primo ou não!");
    } else {
    if (isPrime(num)) {
    console.log(`${num} "Parabéns, você encontrou um nímero primo.`);
    } else {
    console.log(`${num} Desculpe, infelizmente não é um número primo.`);
    }
    }
    }
    // Chama a função para verificar se o número é primo.
    checkPrime();
    