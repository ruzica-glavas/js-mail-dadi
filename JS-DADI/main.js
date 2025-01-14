/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

/*
mini tasks:
    - creare due array che vadano da 1 a 6 in modo randomico sia per il computer sia per il giocatore;
    - fare due console.log dove vengono mostrati i numeri pescati
    - chi estrae il numero più alto, vince (quindi creare una condizione)
*/



//Creazione array

const computerDado = Math.round(Math.random()*6)
const playerDado = Math.round (Math.random()*6)

console.log(`Numero estratto dal computer: ${computerDado}.`)
console.log(`Numero estratto dal player: ${playerDado}`)

//Creazione delle condizioni

if(computerDado>playerDado){
    console.log("Computer ha estratto il numero più alto e quindi vince")
}else if(computerDado<playerDado){
    console.log("Player ha estratto il numero più alto e quindi vince")
} else{
    console.log("Player e Computer hanno estratto lo stesso numero, quindi pareggio")
}