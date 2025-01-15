/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email
*/


/*
mini tasks:
    - creare un'array con 3-5 email
    - creare un prompt dove chiedo all'utente la propria email 
    - creare un ciclo for con all'interno un console.log dove scrivo "l'email dell'utente é ${email}"

*/


//lista delle email

const emailsInvitati = [
    'nathan@gmail.com',
    'ed@gmail.com',
    'fabio@gmail.com',
    'phil@gmail.com',
    'carlo@gmail.com'
]

//prompt per l'utente

const emailsPrompt = prompt ("Inserisci la tua email")

/*dichiarare la variabile per verificare se l'email é presente nella lista*/

let emailsPresent = false;

//creare il ciclo for

for (i=0; i<emailsInvitati.length; i++){
    //se true

    if(emailsInvitati[i]===emailsPrompt){
        emailsPresent=true

    // se false
}else{
    emailsPresent
}

}

//Creare il messaggio appropriato in caso l'email sia o meno all'interno della lista di invitati

if(emailsPresent){
    console.log("La tua email é presente nella lista degli invitati, quindi puoi accedere!")
} else{
    console.log("La tua email non é presente nella lista degli invitati, quindi non puoi accedere!")
}
