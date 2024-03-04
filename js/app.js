//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//oppure applicato uno sconto del 40% per gli over 65.

// età del passeggero
const age = parseInt(prompt("Inserisci la tua età")); //number

console.log("Età del passeggero: " + age)
// km che il passeggero vuole percorrere
const km = parseFloat(prompt("Quanti km devi percorrere?")); //number

console.log("Devi percorrere: " + km + " km.")

//prezzo del biglietto

