'use strict'

const Attempts = Number.MAX_SAFE_INTEGER;

/**
 * Valida se os argumentos passados estao corretos e retorna verdadeiro ou falso
 * @param {*} arr 
 */
const validateArgs = (arr) => {
    if (arr.lengh < 3) {
        return true;
    }
    for (let i = 0; i < 3; i++) {
        if (isNaN(arr[i])) {
            return true;
        }
    }
    return false;
}


if (validateArgs(process.argv.slice(2))) {
    console.info('Favor, Inserir os Parâmetros corretamente')
    process.exit(1);
}
// atribuinfo os parametros as variaveis globais
const amp1 = parseInt(process.argv[2], 10),
      amp2 = parseInt(process.argv[3], 10),
      cook = parseInt(process.argv[4], 10);
/**
 * Calcula o maximo divisor comum entre dois numeros
 * @param {*} num1 
 * @param {*} num2 
 */
const mdc = (num1, num2) => {
    let x;
    do {
        x = num1 % num2;
        num1 = num2;
        num2 = x;

    } while (x != 0);

    return num1;
}

/**
 * Verifica se e possivel resolver o problema com as ampulhetas passadas e o tempo de cozimento
 * @param {*} amp1 
 * @param {*} amp2 
 * @param {*} miojo 
 */
const validateViability = (amp1, amp2, miojo) => {
    // os tempos das ampulhetas deve ser maior
    if (amp1 <= miojo || amp2 <= miojo) {
        console.info(`O tempo das ampulhetas deve ser maior que o de cozimento!`);
        process.exit(1)
    }
    // o tempo de cozimento deve ter um divisao exata pelo MDC
    if ((miojo % mdc(amp1, amp2))) {
        console.info(`Não é possivel obter o tempo de cozimento exato com as ampulhetas informadas!`);
        process.exit(1)
    }
}


validateViability(amp1, amp2, cook);

let tempAmp1 = amp1,
    tempAmp2 = amp2,
    checkTime = 0,
    count = 0,
    totalTime = 0;

/**
 * Itera com as ampulhetas afim de encontrar a quantidade de iterações e o tempo gasto para o problema
 */
while (checkTime < Attempts) {
    // recebe o tempo da menor subAmpulheta
    checkTime = tempAmp1 > tempAmp2 ? tempAmp2 : tempAmp1;
    if (checkTime == cook) {
        totalTime += checkTime;
        break;
    } else {
        // resolve as diferenças e acrescenta ao tempo total
        if (tempAmp1 > tempAmp2) {
            tempAmp1 = tempAmp1 - tempAmp2
            totalTime += tempAmp2;
            tempAmp2 = amp2;
        } else {
            tempAmp2 = tempAmp2 - tempAmp1
            totalTime += tempAmp1;
            tempAmp1 = amp1;
        }
    }
    count++;
}
if(checkTime >= Attempts){
    console.info('Não foi possivel resolver com o numero maximo de tentativas configurado!')
    process.exit(1)
}

// Relatorio final

console.info('\nRelatório Final\n');
console.info(`Ampulheta 1       : ${amp1} minutos`);
console.info(`Ampulheta 2       : ${amp2} minutos`);
console.info(`Tempo de Cozimento: ${checkTime} minutos`);
console.info(`Tempo Tatal       : ${totalTime} minutos`);
console.info(`Número Interações : ${count}\n`);