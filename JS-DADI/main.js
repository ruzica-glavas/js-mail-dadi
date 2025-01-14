/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

/*
mini tasks:
    - creare due array che vadano da 1 a 6 in modo randomico sia per il computer sia per il giocatore;
    - fare un console.log dove viene mostrato i numeri pescati
    - chi estrae il numero più alto, vince (quindi creare una condizione)
*/



//Creazione array

const computerDado = Math.random()*6
const playerDado = Math.random()*6

console.log(`Numero estratto dal computer: ${computerDado.toFixed(0)}.`)
console.log(`Numero estratto dal giocatore: ${playerDado.toFixed(0)}`)

//Creazione delle condizioni