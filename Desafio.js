// Desafio IBM - Digital - Node.js

'use strict'
const Attempts = Number.MAX_SAFE_INTEGER;

const validateInfo = (x) => {
    if (x.lengh < 3) {
        return true;
    }
    for (let i = 0; i < 3; i++) {
        if (isNaN(x[i])) {
            return true;
        }
    }
    return false;
}


if (validateInfo(process.argv.slice(2))) {
    console.info('Favor, informe os Parâmetros corretamente e tente novamente!')
	console.info('Inserir: [Numero inteiro ampulheta 1] [numero inteiro ampulheta 2] [numero inteiro Tempo cozimento]')
    process.exit(1);
}

const glass1 = parseInt(process.argv[2], 10),
      glass2 = parseInt(process.argv[3], 10),
      cooking = parseInt(process.argv[4], 10);
	  

const var1 = (int1, int2) => {
    let x;
    do {
        x = int1 % int2;
        int1 = int2;
        int2 = x;

    } while (x != 0);

    return int1;
}


const validateViability = (glass1, glass2, miojo) => {
 
    if (glass1 <= miojo || glass2 <= miojo) {
        console.info(`Inserir tempo das ampulhetas maior que o de cozimento do miojo.`);
		console.info(`Tente novamente!`);
        process.exit(1)
    }
   
    if ((miojo % var1(glass1, glass2))) {
        console.info(`Com o tempo das ampulhetas informado não foi possível calcular o tempo exato de cozimento.`);
		console.info(`Tente novamente!`);
        process.exit(1)
    }
}


validateViability(glass1, glass2, cooking);

let temp1 = glass1,
    temp2 = glass2,
    timeCheck = 0,
    count = 0,
    timeTotal = 0;


while (timeCheck < Attempts) {
    timeCheck = temp1 > temp2 ? temp2 : temp1;
    if (timeCheck == cooking) {
        timeTotal += timeCheck;
        break;
    } else {
        if (temp1 > temp2) {
            temp1 = temp1 - temp2
            timeTotal += temp2;
            temp2 = glass2;
        } else {
            temp2 = temp2 - temp1
            timeTotal += temp1;
            temp1 = glass1;
        }
    }
    count++;
}
if(timeCheck >= Attempts){
    console.info('Não foi possivel resolver com o numero maximo de tentativas configurado!')
    process.exit(1)
}

// Relatorio final

console.info('\nRelatório:\n');

console.info(`Tempo da Ampulheta 1  : ${glass1} minutos`);
console.info(`Tempo da Ampulheta 2  : ${glass2} minutos`);
console.info(`Tempo Cozimento Miojo : ${timeCheck} minutos`);
console.info(`Tempo preparo Total   : ${timeTotal} minutos`);
console.info(`Número Interações     : ${count}\n`);
